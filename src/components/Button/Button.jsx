import { ButtonContainer } from "./ButtonStyled";

export function Button ({type, text}) {
    return <ButtonContainer type={type}>{text}</ButtonContainer>
}