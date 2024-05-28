import React from 'react';
import {AboutContainer, Image, TextContent} from './AboutStyled'


export default function AboutSection() {
    return (
        <AboutContainer id="About">
            <Image src="https://via.placeholder.com/150" alt="Profile" />
            <TextContent>
                <h2>About Me</h2>
                <p>Here you can write something about yourself.</p>
                <p>You can include more details like your interests, hobbies, skills, and experiences.</p>
                <ul>
                    <li>Interest 1</li>
                    <li>Interest 2</li>
                    <li>Interest 3</li>
                </ul>
            </TextContent>
        </AboutContainer>
    );
}