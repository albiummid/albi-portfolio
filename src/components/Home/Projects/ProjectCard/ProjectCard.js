import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Fade from 'react-reveal/Fade';
import './ProjectCard.css'

const ProjectCard = ({ data }) => {
    const { images, title, liveLink,description, repoLink, id,tools } = data;
    // className=
    return (
        <div className={id % 2 === 0 ? "flex-reverse project-container" : "flex-normal project-container"}>
            <Fade right>
            <div className="project-image ">
                <Carousel   >
                    {
                        images.map(image=> <img className="sliderImg" src={image} alt=""/> )
                    }
                </Carousel>
            </div>
            </Fade>
            <Fade left>
            <div className="project-details">
                <h1>
                    {title}
                </h1>
                <p>
                    {
                        description
                  }
                </p>
                <div className="tools-container">
                    {
                        tools.map(tool => <button className="disable-btn" disabled="disabled">{ tool }</button>)
                    }
                </div>
                <div className="link-container">
                    <a href={liveLink} target="_blank" rel="noreferrer" >
                    <i class="fas fa-external-link-alt"></i>
                    </a>
                    <a href={repoLink
                    } target="_blank" rel="noreferrer" >
                    <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default ProjectCard;