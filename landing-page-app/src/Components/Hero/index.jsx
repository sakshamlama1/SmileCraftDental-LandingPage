import { useState } from 'react';
import "./index.css";
import ConsultationFormModal from '../ConsultationFormModal';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1><strong>A CONFIDENT SMILE</strong></h1>
            <h1><strong>AWAITS YOU</strong></h1>
            <p className="hero-highlight">
              <strong>Claim Your $75 Porcelain Veneer Consultation (Valued at $375)!</strong>
            </p>
            <ul className="hero-list">
              <li>24 Months interest-free available</li>
              <li>6 Hybrid Veneers for $6,300</li>
              <li>$1,221 off 6 Porcelain Veneers — was $9,621, now $8,400</li>
            </ul>

            <button className="hero-button" onClick={() => setIsModalOpen(true)}>
                Yes! I Want This Offer
            </button>            
            <p className="limited-offer">***LIMITED to the <u>First 15 People</u> Who Schedule***</p>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img
                src="https://assets.cdn.filesafe.space/fTXSgw7UpgHF58UEokfH/media/a9a366a1-47e2-4881-b9db-ebcc3c29304b.jpeg"
                alt="Confident Smile Veneers"
              />
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && <ConsultationFormModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default Hero;
