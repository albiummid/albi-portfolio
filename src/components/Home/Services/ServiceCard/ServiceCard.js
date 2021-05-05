import React from 'react';
import './ServiceCard.css'
import Fade from 'react-reveal/Fade';
import Jello from 'react-reveal/Jello';
const ServiceCard = ({ data }) => {
    const { icon, title, description } = data;
    return (
        
            <div className="service-card">
                <Jello>
                <img src={icon} alt="" />
                </Jello>
            <Fade left>
            <h2>{title}</h2>
                <p>
                    {description}
                </p>
               </Fade>
            </div>
     

    );
};

export default ServiceCard;