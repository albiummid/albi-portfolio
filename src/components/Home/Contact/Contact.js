import React from 'react';
import './Contact.css'
import contactImg from '../../../images/contact.png';
import emailjs from 'emailjs-com';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target);
    
        emailjs.sendForm('service_9gzw9xj', 'template_al7ex9l', e.target, 'user_f4Q4w652L2ya4ymbYdO4H')
            .then((result) => {
                console.log(result);
              alert("Your message submitted")
          }, (error) => {
              alert("Message sending failed!")
          });
      }
    return (
        <section className="section-container" id="contact">
        <div className="section-header">
            <h1><span>4. </span> Get In Touch</h1>
        </div>
        <div className="contact-container">
            <div className="contact-img">
                <img src={contactImg} alt="" />
            </div>
                <div className="form-container">
                <form action="" onSubmit={sendEmail} >
                <input type="text" placeholder="Your Name" required name="from_name" />
                <input type="email" name="reply_to"   placeholder="Your email" required />
                <textarea name="message" type="message" placeholder="Your Message" required />
                <button type="submit" className="main-btn"> Send </button>
            </form>
            </div>
           
        </div>

    </section>
    );
};

export default Contact;