import React from 'react';
import './Contact.css'
import contactImg from '../../../images/contact.jpg';
import emailjs from 'emailjs-com';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_9gzw9xj', 'template_al7ex9l', e.target, 'user_f4Q4w652L2ya4ymbYdO4H')
          .then((result) => {
              alert("your data submitted")
          }, (error) => {
              alert("data sending failed!")
          });
      }
    return (
        <section id="contact">
        <div className="section-header">
            <h1><span>4. </span> Get In Touch</h1>
        </div>
        <div className="contact-container">
            <div className="contact-img">
                <img src={contactImg} alt="" />
            </div>
            <form action="" onSubmit={sendEmail} >
                <input type="text" placeholder="Your Name" required />
                <input type="email"  placeholder="Your email" required />
                <textarea type="message" placeholder="Your Message" required />
                <button className="main-btn"> Submit </button>
            </form>
           
        </div>

    </section>
    );
};

export default Contact;