import {
    styled
} from "styled-components"
import CampoTexto from "../CampoTexto";

const HeaderStyled = styled.header `
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 60px 0;

    img {
        max-width: 212px;
    }
`

const Header = () => {
    return ( <HeaderStyled >
        <img src="/imagens/logo.png" alt="Banner Space App" />
        <CampoTexto type='search' placeholder='O que você procura?'/>
        </HeaderStyled>
    )
}

export default Header;