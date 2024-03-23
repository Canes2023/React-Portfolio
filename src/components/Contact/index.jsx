import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [formState, setFormState] = useState({ Name: '', Email: '', Message: '' });
    const [errors, setErrors] = useState({});
    const [showEmptyFormMessage, setShowEmptyFormMessage] = useState(false);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        setErrors(validate({ ...formState, [e.target.name]: e.target.value }));
    }

    const handleBlur = () => {
        if (formState.Name === '' && formState.Email === '' && formState.Message === '') {
            setShowEmptyFormMessage(true);
        } else {
            setShowEmptyFormMessage(false);
        }
    }

    const validateForm = () => {
        let tempErrors = {}
        if (formState.Name === '') {
            tempErrors.Name = 'Name is required'
        }
        if (formState.Email === '') {
            tempErrors.Email = 'Email is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formState.Email)) {
            tempErrors.Email = 'Invalid email address'
        }
        if (formState.Message === '') {
            tempErrors.Message = 'Message is required'
        }
        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted');
            // Reset form state
            setFormState({ Name: '', Email: '', Message: '' });
            setShowEmptyFormMessage(false);
        }
    }

    return (
        <div className="contact-container">
            <h2 className="title">Submit your contact information here and I'll get back to you as soon as possible</h2>
            <form className="contact-form" id="ContactForm" onSubmit={handleSubmit}>
                <label htmlFor="Name">Name:</label>
                <input type="text" id="Name" name="Name" value={formState.Name} onChange={handleChange} onBlur={handleBlur} />
                {errors.Name && <p className="error-message">{errors.Name}</p>}
                <label htmlFor="Email">Email:</label>
                <input type="text" id="Email" name="Email" value={formState.Email} onChange={handleChange} onBlur={handleBlur} />
                {errors.Email && <p className="error-message">{errors.Email}</p>}
                <label htmlFor="Message">Message:</label>
                <textarea id="Message" name="Message" value={formState.Message} onChange={handleChange} onBlur={handleBlur} />
                {errors.Message && <p className="error-message">{errors.Message}</p>}
                {showEmptyFormMessage && <p className="error-message">Form could not be empty</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
