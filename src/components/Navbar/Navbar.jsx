import { Outlet } from 'react-router-dom'
import { TitleLogo, NavbarContainer, TLink } from './NavbarStyled.jsx'

export function Navbar() {
    return (
        <>
            <NavbarContainer>
                <div>
                    <TitleLogo>Portfólio Pessoal</TitleLogo>
                </div>
                <div>
                    <TLink href="#About">Sobre</TLink>
                    <TLink href="#Projects"> Projetos </TLink>
                    <TLink href="#Contacts"> Contatos </TLink>
                </div>
            </NavbarContainer>
            <Outlet />
        </>
    )
}

