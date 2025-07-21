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
              <li>Hybrid Veneers OFF 6 veneers for $6300</li>
              <li>Porcelain Veneers OFF 6 veneers for $9261</li>
            </ul>

            <button className="hero-button" onClick={() => setIsModalOpen(true)}>
                Yes! I Want This Offer
            </button>            
            <p className="limited-offer">***LIMITED to the <u>First 15 People</u> Who Schedule***</p>
            <div className="countdown-timer">
              <div className="timer-box"><div className="count" id="hours">23</div><div className="label">hours</div></div>
              <div className="timer-box"><div className="count" id="minutes">36</div><div className="label">minutes</div></div>
              <div className="timer-box"><div className="count" id="seconds">56</div><div className="label">seconds</div></div>
            </div>
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
