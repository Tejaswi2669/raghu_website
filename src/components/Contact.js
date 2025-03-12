import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css'; // Import the CSS for styling

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Message sent successfully!");
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>Have a question? Feel free to reach out.</p>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <label>Name</label>
                    <input type="text" {...register('name', { required: true })} placeholder="Enter your name" />
                    {errors.name && <span className="error">Name is required</span>}
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input type="email" {...register('email', { required: true })} placeholder="Enter your email" />
                    {errors.email && <span className="error">Email is required</span>}
                </div>

                <div className="input-group">
                    <label>Message</label>
                    <textarea {...register('message', { required: true })} placeholder="Write your message here"></textarea>
                    {errors.message && <span className="error">Message is required</span>}
                </div>

                <button type="submit" className="send-button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
