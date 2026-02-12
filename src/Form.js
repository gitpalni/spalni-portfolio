import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import './Form.css';
import Artwork from './Artwork.png'

const Form = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => emailjs.init("hdPhXHd29eCsU7dlq"), []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_4zi0e2p";
        const templateId = "template_spkas8f";

        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: name,
                email: email,
                message: message
            });
            alert("Email Ssuccessfully Sent");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className='Formalign'>
        <div className='Form'>
            <p id = 'top'>
                Want to get in touch?
                <br/>
                Drop me a line!
            </p>
            <h3 className='second'>
                Would love to hear from you!
            </h3>
            <form className='details' onSubmit={handleFormSubmit}>
                <div className='third'>
                    <div className='name'>    
                        <label htmlFor='name'>NAME</label>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Enter your name' 
                            required 
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                    <div className='email'>
                        <label htmlFor='email'>EMAIL</label>
                        <input 
                            type='text' 
                            name='email' 
                            placeholder='Enter your email' 
                            required
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                </div>
                <div className='message'>
                    <label htmlFor='message'>MESSAGE</label>
                    <textarea
                        rows={5}
                        name='message' 
                        placeholder='Enter your message'
                        onChange={(e) => { setMessage(e.target.value) }}
                    ></textarea>
                </div>
                <button className = 'btn' type='submit'>Submit</button>
            </form>
        </div>
        <img className='artwork' src={Artwork} alt="Main"/>
        </div>
    )
}

export default Form