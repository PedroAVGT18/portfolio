import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress } from 'react-icons/si';
import { DiPhp } from "react-icons/di";

// Styled components
const Section = styled.section`
    padding: 50px 0;
    text-align: center;
    color: white;
    margin-top: 20vh;
    margin-bottom: 30vh;
`;

const TechnologiesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    gap: 20px;
`;

const TechnologyItem = styled.div`
    padding: 20px;
    border-radius: 8px;
    background-image: linear-gradient(220.55deg, #00E0EE 0%, #AD00FE 100%);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2); /* Lighter box shadow */
    width: 110px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.3); /* Adjusted box-shadow on hover */
        transform: translateY(-4px); /* Move the item up slightly on hover */
    }
`;



const TechnologyLogo = styled.div`
    font-size: 3em;
    margin-bottom: 10px;
`;

const TechnologyName = styled.p`
    font-size: 1.1em;
`;

// Technologies data with react-icons
const technologies = [
    { name: 'MongoDB', logo: <SiMongodb /> },
    { name: 'Express.js', logo: <SiExpress /> },
    { name: 'React', logo: <FaReact /> },
    { name: 'Node.js', logo: <FaNodeJs /> },
    { name: 'MySQL', logo: <SiMysql /> },
    { name: 'PHP', logo: <DiPhp /> },
];

export default function TechnologiesSection() {
    return (
        <Section>
            <TechnologiesList>
                {technologies.map((tech) => (
                    <TechnologyItem key={tech.name}>
                        <TechnologyLogo>{tech.logo}</TechnologyLogo>
                        <TechnologyName>{tech.name}</TechnologyName>
                    </TechnologyItem>
                ))}
            </TechnologiesList>
        </Section>
    );
}
