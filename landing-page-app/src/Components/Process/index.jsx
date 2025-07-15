import { useState } from 'react';
import "./index.css";
import ConsultationImage from '../../assets/consultationImage.png';
import TreatmentImage from '../../assets/treatmentImage.png';
import SmileImage from '../../assets/smileImage.png';
import ConsultationFormModal from '../ConsultationFormModal';

function Process() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="process-component">
                <div className="process-instructions">
                    <h2>Brighten Your Smile in 3 Easy Steps</h2>
                    <div className="process-instructions-grid">
                        <div className="process-step">
                            <img src={ConsultationImage} alt="Consultation" className="process-instruction-logo" />
                            <p><strong>Book Your Consultation</strong><br />Schedule your visit at your nearest Smilecraft Dental practice and discuss your dental needs.</p>
                        </div>
                        <div className="process-step">
                            <img src={TreatmentImage} alt="Treatment" className="process-instruction-logo" />
                            <p><strong>Receive Tailored Treatment</strong><br />Our expert dentists will guide you through a personalised treatment plan.</p>
                        </div>
                        <div className="process-step">
                            <img src={SmileImage} alt="Smile" className="process-instruction-logo" />
                            <p><strong>Show Off Your Smile</strong><br />Leave with confidence and a brighter, healthier smile you'll love to share.</p>
                        </div>
                    </div>
                    <div className='cta-container'>
                        <button className="cta-button" onClick={() => setIsModalOpen(true)}>
                            Yes! I Want This Offer
                        </button>       
                    </div>
                </div>
            </section>

            {isModalOpen && <ConsultationFormModal onClose={() => setIsModalOpen(false)} />}
        </>
    );
}

export default Process;
