import { styled } from "styled-components"
import Botao from "../../Botao";

const GaleriaPopularesStyled = styled.section`
    display: flex ;
    flex-direction: column;
    gap: 18px;
    box-sizing: border-box;
    img {
        border-radius: 20px;
    }

`

const GaleriaPopulares = ({galeriaPopulares = []}) => {
    return (
        <GaleriaPopularesStyled>
            {galeriaPopulares.map((foto, index) => <img key={index} src={foto.foto} 
            alt="Foto popular da galeria" />)}
            <Botao>
                Ver mais
            </Botao>
        </GaleriaPopularesStyled>
    )
}

export default GaleriaPopulares;