import React from 'react';
import './Services.css'
import development from '../../../images/icons/coding.png'
import design from '../../../images/icons/wireframe.png'
import responsive from '../../../images/icons/responsive.png'
import satisfaction from '../../../images/icons/satisfaction.png'
import pixel from '../../../images/icons/navigation.png'
import sufficient from '../../../images/icons/best-price.png'
import ServiceCard from './ServiceCard/ServiceCard';
const serviceData = [
    {
        title: "Web Development",
        icon: development,
        fade:'top',
        description:"Clean , effective and bug free code can make your website faster, smooth and sufferless."
    },
    {
        title: "Web Design",
        icon: design,
        fade:'bottom',
        description:"Web design is the structure of a website that provide user experience and serve services .So, attractive web design must ."
    },
    {
        title: "Responsive Design",
        icon: responsive,
        fade:'right',
        description:"Responsive web design is a very common need nowadays .There are many devices those have different screen sizes.For client satisfaction,Responsiveness must."
    },
    {
        title: "Client Satisfaction",
        icon: satisfaction,
        fade:'left',
        description:"Client is my main priority .Clients needs and provided guideline to build or upgrading websites is respectfully accepted."
    },
    {
        title: "Pixel Perfect Design",
        icon: pixel,
        fade:'top',
        description:"Provide Pixel perfect design that you provide in Figma,XD,PSD file formate"
    },
    {
        title: "Efficient Price",
        icon: sufficient,
        fade:'bottom',
        description:"I works for customer satisfaction and deliver best working experience to the customer .So price will not be go away.Price will be efficient"
    },
]
const Services = () => {
    return (
        <section className="section-container">
            <div className="section-header">
                <h2> <span>2.</span> My Services</h2>
            </div>
            <div className="card-container">
                {
                    serviceData.map(data => <ServiceCard data={data} key={data.title} />)
                }
            </div>
        </section>
    );
};

export default Services;