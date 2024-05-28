import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    background-color: #333;
    z-index: 1;
    background-image: linear-gradient(220.55deg, #00E0EE 0%, #AD00FE 100%);
    -webkit-background-clip: text;
    background-clip: text;
`

export const TitleLogo = styled.h1`
    display: flex;
    color: transparent;
    font-size: 2vw;
    font-weight: 900;

`;

export const TLink = styled.a`
    text-decoration: none;
    color: transparent;
    padding: 0.4rem 1rem;
    font-size: 1.5vw;
    font-weight: 500;
`;
