import "./index.css";
import ConsultationImage from '../../assets/consultationImage.png';
import TreatmentImage from '../../assets/treatmentImage.png';
import SmileImage from '../../assets/smileImage.png';

function Process() {

    return (
        <div className="process-component">
            <div className="process-instructions">
                <h2>BRIGHTEN YOUR SMILE IN 3 EASY STEPS</h2>
                <div className="process-instructions-grid">
                    <div className="process-step">
                        <img src={ConsultationImage} alt="Consultation logo" className="consultation-logo" />
                        <p><strong>Book Your Next Visit</strong><br />Book your next visit with your nearest Smilecraft Dental Practice</p>

                    </div>
                    <div className="process-step">
                        <img src={TreatmentImage} alt="Treatment logo" className="treatment-logo" />
                        <p><strong>Book Your Next Visit</strong><br />Book your next visit with your nearest Smilecraft Dental Practice</p>
                    </div>
                    <div className="process-step">
                        <img src={SmileImage} alt="Smile logo" className="smile-logo" />
                        <p><strong>Book Your Next Visit</strong><br />Book your next visit with your nearest Smilecraft Dental Practice</p>
                    </div>
                </div>
                <button>Yes! I Want This Offer</button>
            </div>
        </div>
    );
}

export default Process;
