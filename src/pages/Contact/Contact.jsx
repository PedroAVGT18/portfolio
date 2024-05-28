import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { CgMail } from "react-icons/cg";

const ContactSectionWrapper = styled.section`
    text-align: center;
    color: white;
    margin-top: 20vh;
    margin-bottom: 10vh;
`;

const Phone = styled.p`
    font-size: 1.2em;
    margin-top: 20px;
`;

const SocialButtonsWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 15px;
`;

const SocialButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: ${({ bgColor }) => bgColor || 'gray'};
    color: white;
    text-decoration: none;
    font-size: 1.2em;
`;

export default function ContactSection() {
    return (
        <ContactSectionWrapper id="Contacts">
            <Phone>Phone: +351 930 465 243</Phone>
            <SocialButtonsWrapper>
                <SocialButton href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                    <CgMail />
                </SocialButton>
                <SocialButton href="https://www.github.com/PedroAVGT18/"  target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </SocialButton>
                <SocialButton href="https://www.linkedin.com/in/pedro-fernandes-7151422aa" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </SocialButton>
            </SocialButtonsWrapper>
        </ContactSectionWrapper>
    );
}
