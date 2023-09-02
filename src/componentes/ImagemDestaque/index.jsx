import { styled } from "styled-components";

const ImagemDestaqueStyled = styled.img`
    max-width: 100%;
    border-radius: 25px;
`
const SecaoImagemDestaque = styled.section`
    position: relative;
    h2{
        position: absolute;
        bottom: 75px;
        margin: 0;
        left:75px;
        font-size: 40px;
        font-family: GandhiSansRegular;
        font-weight: 400;
        width: 301px;
        color: #FFFFFF;
        line-height: 1.4;
    }

`
const ImagemDestaque = () => {
    return (
        <SecaoImagemDestaque>
            <ImagemDestaqueStyled src='/src/assets/banner.png' alt="Imagem em destaque"/>
            <h2>A galeria mais completa de fotos do espaço!</h2>
        </SecaoImagemDestaque>
    )
}

export default ImagemDestaque;