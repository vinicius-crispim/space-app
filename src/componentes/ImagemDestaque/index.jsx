import { styled } from "styled-components";

const ImagemDestaqueStyled = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`} ;
    background-size:cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    display: flex;
    align-items: center;
    min-height: 328px;
    border-radius: 20px;
    max-width: 100%;
    margin: 0;
    h2{
        font-size: 40px;
        font-weight: 400;
        max-width: 300px;
        padding: 0 64px;
        color: #FFFFFF;
        line-height: 1.4;
    }
`

const ImagemDestaque = ({titulo, imagem}) => {
    return (
        <ImagemDestaqueStyled $backgroundImage={imagem}>
            <h2>{titulo}</h2>
        </ImagemDestaqueStyled>
    )
}

export default ImagemDestaque;