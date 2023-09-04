import { styled } from "styled-components"
import GaleriaGeralCard from "./GaleriaGeralCard";

const GaleriaGeralStyled = styled.section`
    display: flex ;
    flex-wrap: wrap;
    gap: 20px;
    flex-grow: 1;
`

const GaleriaGeral = ({galeriaGeral}) => {
    return (
        <GaleriaGeralStyled>
            {/* {galeriaGeral.map((foto, index) => {
                return (<img key={index} src={foto.foto} alt="Foto"/>)})
            } */}
            {galeriaGeral.map((texto) => {
                console.log(texto)
                return <GaleriaGeralCard foto={texto.foto} nomeFoto={texto.nomeFoto} informacoesFoto={texto.informacoesFoto}/>
            })}
        </GaleriaGeralStyled>
    )
}

export default GaleriaGeral;