import { styled } from "styled-components";

const ItemStyled = styled.li`
    height: 19px;
    margin: 32px 0;
    font-size: 24px;
    line-height: 29px;
    cursor: pointer;
`
const ItemLinkStyled = styled.a`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9' };
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular' };
    img {
        max-width: 32px;
    }
`


const ItemBarraLateral = ({ativo = false, iconeAtivo, iconeInativo, children}) => {
    return (
        <ItemStyled><ItemLinkStyled $ativo={ativo} href='#'><img src={ativo ? iconeAtivo : iconeInativo} alt='Icone home'/>{children}</ItemLinkStyled></ItemStyled>
    )
}

export default ItemBarraLateral;