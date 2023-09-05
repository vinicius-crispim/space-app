import { styled } from "styled-components"
import GaleriaGeralCard from "./GaleriaGeralCard";

const GaleriaGeralStyled = styled.section`
    display: flex ;
    flex-wrap: wrap;
    gap: 24px;
    box-sizing: border-box;
    margin-right: 24px;
`

const GaleriaGeral = ({fotosGaleria = []}) => {
    console.log('aaa', fotosGaleria)
    return (
        <GaleriaGeralStyled>
            {fotosGaleria.map((foto, index) => {
                return <GaleriaGeralCard key={index} foto={foto}/>
            })}
        </GaleriaGeralStyled>
    )
}

export default GaleriaGeral;