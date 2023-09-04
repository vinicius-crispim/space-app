import { styled } from "styled-components";

const BotaoStyled = styled.button`
    padding: 10px;
    background-color: transparent;
    border-radius: 20px;
    border-color: #C98CF1;
    color: #FFFFFF;
    font-size:20px;
    font-family: GandhiSansBold;
    cursor:pointer;
`;

const Botao = ({children}) => {
    return (
        <BotaoStyled>
            {children}
        </BotaoStyled>
    )
}

export default Botao;