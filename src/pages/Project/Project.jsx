import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
    display: flex;
    justify-content: space-between;
    color : white;
    margin-top: 20vh;
    margin-bottom: 50vh;
`;

const ProjectCard = styled.div`
    width: 30%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

export default function ProjectsSection() {
    return (
        <ProjectsContainer id="Projects">
            <ProjectCard>
                <ProjectImage src="https://via.placeholder.com/300" alt="Project 1" />
                <h3>Project 1</h3>
                <p>Description of Project 1</p>
            </ProjectCard>
            <ProjectCard>
                <ProjectImage src="https://via.placeholder.com/300" alt="Project 2" />
                <h3>Project 2</h3>
                <p>Description of Project 2</p>
            </ProjectCard>
            <ProjectCard>
                <ProjectImage src="https://via.placeholder.com/300" alt="Project 3" />
                <h3>Project 3</h3>
                <p>Description of Project 3</p>
            </ProjectCard>
        </ProjectsContainer>
    );
}