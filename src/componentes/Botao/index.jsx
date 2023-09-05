import { styled } from "styled-components";

const BotaoStyled = styled.button`
    padding: 10px;
    background-color: transparent;
    border-radius: 20px;
    border-color: #7B78E5;
    color: #FFFFFF;
    font-size:20px;
    font-family: GandhiSansBold;
    box-shadow: 2px 4px 4px #000000;
    cursor:pointer;

    &:hover{
        transition: .3s;
        background-color: #7B78E5;
    }
`;

const Botao = ({children}) => {
    return (
        <BotaoStyled>
            {children}
        </BotaoStyled>
    )
}

export default Botao;