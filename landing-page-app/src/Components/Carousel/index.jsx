import { useEffect, useRef, useState } from 'react';
import './index.css';
import ConsultationFormModal from '../ConsultationFormModal';

const Carousel = ({ images = [], interval = 3000 }) => {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const containerRef = useRef(null);
    const trackRef = useRef(null);

    // Calculate how many items fit in view
    const getVisibleCount = () => {
    const itemSize = 150;
    return containerRef.current
        ? Math.floor(containerRef.current.offsetWidth / itemSize)
        : 1;
    };

    // Update visible count on resize
    useEffect(() => {
        const handleResize = () => setVisibleCount(getVisibleCount());
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Extended images with clones at both ends
    const extendedImages = [
        ...images.slice(-visibleCount),
        ...images,
        ...images.slice(0, visibleCount),
        ];

        const totalSlides = images.length;

        // Initialize starting index after visibleCount is known
        useEffect(() => {
        setIndex(visibleCount);
    }, [visibleCount]);

    // Autoplay loop
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => prev + 1);
            setIsTransitioning(true);
        }, interval);
        return () => clearInterval(timer);
    }, [interval]);

    // Reset position after reaching the end clone
    useEffect(() => {
        if (index === totalSlides + visibleCount) {
            const timeout = setTimeout(() => {
            setIsTransitioning(false);
            setIndex(visibleCount);
            }, 500); // Wait for transition to finish
            return () => clearTimeout(timeout);
        }

        if (index === 0) {
            const timeout = setTimeout(() => {
            setIsTransitioning(false);
            setIndex(totalSlides);
            }, 500);
            return () => clearTimeout(timeout);
        }

        // Re-enable transition after jump
        if (!isTransitioning) {
            requestAnimationFrame(() => {
            setIsTransitioning(true);
            });
        }
    }, [index, isTransitioning, totalSlides, visibleCount]);

    const slideStyle = {
        transform: `translateX(-${(index * 100) / extendedImages.length}%)`,
        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        width: `${(extendedImages.length * 100) / visibleCount}%`,
    };

    return (
        <>
            <div className="carousel-container" ref={containerRef}>
                <div className="carousel-content" id='smiles-carousel'>
                    <div className="carousel-overlay">
                        <div className="carousel-text-container">
                            <h2>Transformations That Speak for Themselves</h2>
                            <p>See real smiles from real patients – before and after their dental treatments.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-track" style={slideStyle} ref={trackRef}>
                    {extendedImages.map((img, i) => (
                        <div className="carousel-item" key={i} style={{ width: `${100 / extendedImages.length}%` }}>
                            <img src={img} alt={`Smile ${i}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-cta-button" onClick={() => setIsModalOpen(true)}>
                    Yes! I Want This Offer
                </button>
            </div>

            {isModalOpen && <ConsultationFormModal onClose={() => setIsModalOpen(false)} />}
        </>
    );
};

export default Carousel;
