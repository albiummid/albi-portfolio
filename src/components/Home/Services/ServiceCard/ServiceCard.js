import React from 'react';
import './ServiceCard.css'
import Fade from 'react-reveal/Fade';
const ServiceCard = ({ data }) => {
    const { icon, title, description } = data;
    return (
        <Fade bottom >
            <div className="service-card">
                <Fade right>
                <img src={icon} alt="" />
                </Fade>
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </div>
        </Fade>

    );
};

export default ServiceCard;