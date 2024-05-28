import React, { useState, useEffect } from 'react';
import { HomeContainer, Image, TextContainer, Content } from './HomeStyled';
import avatar from '../../images/avatar.png';
import AboutSection from '../About/About';
import ProjectsSection from '../Project/Project';
import ContactSection from '../Contact/Contact';
import TecnologiesSection from '../Technologies/Technologies';
import Footer from '../../components/Footer/Footer';

const TypingText = ({ children }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setShowText(true);
    }, 1000);

    const hideTimeout = setTimeout(() => {
      setShowText(false);
    }, 4000);

    const repeatAnimation = setTimeout(() => {
      setShowText(false);
    }, 5000);
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearTimeout(repeatAnimation);
    };
  }, []);

  return (
    <TextContainer className={showText ? 'show' : ''}>
      {children}
    </TextContainer>
  );
};

export default function Home() {
  return (
    <HomeContainer>
      <Content>
          <Image src={avatar} alt="Meu_Avatar" />
        <TypingText>
          <h3>Pedro Fernandes</h3>
          <p>-- Programador Web --</p>
        </TypingText>
      </Content>

      <AboutSection />

      <ProjectsSection />

      <TecnologiesSection />

      <ContactSection />

      <Footer />
    </HomeContainer>
  );
}
