import { styled } from "styled-components"

const FooterStyled = styled.footer`
    padding: 1rem 4rem;
    width: 100%;
    box-sizing: border-box;
    background-color: #04244F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FDFDFD;
`

const RedesSociaisStyled = styled.div`
    display: flex;
    gap: 16px;

    img {
        padding: 10px;
        border: 2px solid #FDFDFD;
        border-radius: 10px;
    }
`

const Footer = () => {
    return (
        <FooterStyled>
            <RedesSociaisStyled>
                <img src='/imagens/sociais/facebook.svg' alt='Logo do Facebook' />
                <img src='/imagens/sociais/instagram.svg' alt='Logo do Instagram' />
                <img src='/imagens/sociais/twitter.svg' alt='Logo do Twitter' />
            </RedesSociaisStyled>
            <p>Desenvolvido por Alura.</p>
        </FooterStyled>
    )
}

export default Footer;