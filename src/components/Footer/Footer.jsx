import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    color: white;
    text-align: center;
    padding: 20px 0;
`;

const Copyright = styled.p`
    margin-top: 10px;
    font-size: 0.8em;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <Copyright>
                &copy; 2024 Pedro Fernandes. All rights reserved.
            </Copyright>
        </FooterWrapper>
    );
}