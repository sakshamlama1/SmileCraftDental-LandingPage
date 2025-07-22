import { useRef, useState } from 'react';
import './index.css';

const ConsultationFormModal = ({ onClose }) => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const validatePhone = (phone) => {
    const cleaned = phone.trim();
    return /^(\+61|0)[2-478]\d{8}$/.test(cleaned); // Australian numbers
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const agreed = form.agree.checked;

    const newErrors = {};
    if (!name) newErrors.name = 'Full name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    else if (!validatePhone(phone)) newErrors.phone = 'Enter a valid Australian phone number';
    if (!agreed) newErrors.agree = 'You must agree before submitting';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // No errors, submit the form to FormSubmit
      form.submit();  // native form submission to FormSubmit service
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">Enter Your Details To Claim Your Porcelain Veneers Consultation Offer</h2>
        <div className="modal-content">
          <form 
            className="modal-form" 
            action="https://formsubmit.co/manager@smilecraftdental.com"
            method="POST"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            {/* optional to disable captcha */}
            <input type="hidden" name="_captcha" value="false" />

            <label>
              Full Name *
              <input type="text" name="name" placeholder="Your Full Name" />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </label>

            <label>
              Email *
              <input type="email" name="email" placeholder="Your Email" />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </label>

            <label>
              Mobile Number *
              <input type="tel" name="phone" placeholder="Your Mobile Number" />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </label>

            <label className="modal-checkbox">
              <input type="checkbox" name="agree" />
              {errors.agree && <span className="error-text">{errors.agree}</span>}
              <span>
                As requested, we will give you a call in the next 48 hours to discuss the Porcelain 
                Veneer treatment. This is a no-obligation call where you will be given all the information 
                and if you would like to, you can book a $75 consultation with one of our experienced dentist 
                (valued at $375).
              </span>
            </label>

            <button type="submit" className="hero-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationFormModal;
