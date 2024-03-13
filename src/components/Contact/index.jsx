import React, {useState} from 'react'

const Contact = () => {
    const [formState, setFormState] = useState({ Name: '', Email: '', Message: '' });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
        setErrors(validate({ ...formState, [e.target.name]: e.target.value }));
    }
    const validateForm = () => {
        let tempErrors = {}
        if (formState.Name === '') {
            tempErrors.Name = 'Name is required'
        }
        if (formState.Email === '') {
            tempErrors.Email = 'Email is required'
        }
        if (formState.Message === '') {
            tempErrors.Message = 'Message is required'
        }
        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            alert('Form submitted')
        }
    }
  return (
    <div>
        <form id="ContactForm" onSubmit = {handleSubmit}>
            <label htmlFor="Name">Name:</label>
            <input type="text" id="Name" name="Name"value = {formState.Name} onChange = {handleChange} />
            {errors.Name && <p>{errors.Name}</p>}
            <label htmlFor="Email">Email:</label>
            <input type="text" id="Email" name="Email" value = {formState.Email} onChange = {handleChange} />
            {errors.Name && <p>{errors.Email}</p>}
            <label htmlFor="Message">Message:</label>
            <input type="text" id="Message" name="Message" value  = {formState.Message} onChange = {handleChange} />
            {errors.Name && <p>{errors.Message}</p>}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact