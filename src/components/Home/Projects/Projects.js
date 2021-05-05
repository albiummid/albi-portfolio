import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import projectData from './ProjectData'
const Projects = () => {
    return (
        <section id="project" className="section-container">
            <div className="section-header">
                <h2>
                    <span>3. </span> Some Things I’ve Built 
                </h2>
            </div>
            <div className="card-container">
                {
                    projectData.map(data=> <ProjectCard data={data} key={data.id}/>)
                }
            </div>
        </section>
    );
};

export default Projects;