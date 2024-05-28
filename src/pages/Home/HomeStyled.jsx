import styled, { keyframes } from 'styled-components'

export const HomeContainer = styled.section`
    display: fixed;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width:80%;
`;

export const Content = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80%;
    position: relative;
    overflow: hidden;
    box-shadow: rgba(124, 124, 124, 0.295) 0px 7px 29px 0px;
    border-radius: 20px;
    margin-top: 20vh;
    margin-bottom: 50vh;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(220.55deg, #00E0EE 0%, #AD00FE 100%);
        background-size: cover;
        background-position: center;
        z-index: -1;
    }
`;
export const Image = styled.img`
    width: 300px;
    height: 300px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    z-index: 1;
`;

const typeWriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;

  h3{
    font-size: 2.5vw;
  }
  
  p {
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    font-size: 1.5vw;
    animation: ${typeWriter} 5s steps(1000) infinite;
  }
`;
