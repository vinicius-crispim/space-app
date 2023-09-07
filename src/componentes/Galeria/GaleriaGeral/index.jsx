import { styled } from "styled-components"
import GaleriaGeralCard from "./GaleriaGeralCard";

const GaleriaGeralStyled = styled.section`
    display: flex ;
    flex-wrap: wrap;
    gap: 24px;
    box-sizing: border-box;
    margin-right: 24px;
    
`

const GaleriaGeral = ({ setFotoSelecionada={setFotoSelecionada}, aoFavoritaFoto, fotosGaleria = []}) => {
    console.log('aaa', fotosGaleria)
    return (
        <GaleriaGeralStyled>
            {fotosGaleria.map((foto, index) => {
                return <GaleriaGeralCard setFotoSelecionada={setFotoSelecionada} aoFavoritaFoto={aoFavoritaFoto} key={index} foto={foto}/>
            })}
        </GaleriaGeralStyled>
    )
}

export default GaleriaGeral;