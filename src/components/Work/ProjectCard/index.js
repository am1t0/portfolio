import React from 'react';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-technologies">
                    <>Tech Used : </> <span> {project.technologies.join(', ') }</span>
                </p>
                <div className="project-icons">
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" />
                            Live Demo
                        </a>
                    )}
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faCode} className="icon" />
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
