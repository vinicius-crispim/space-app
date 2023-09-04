import {
    styled
} from "styled-components"
import CampoTexto from "../CampoTexto";

const HeaderStyled = styled.header `
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 40px 0;
    align-items: center;
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