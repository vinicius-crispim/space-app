import {
    styled
} from "styled-components"
import GaleriaGeral from "./GaleriaGeral";
import GaleriaPopulares from "./GaleriaPopulares";
const GaleriaStyled = styled.div`
    display: grid;
    grid-template-columns : auto auto;
    
    div h2{
        color: #7B78E5;
        font-weight: 400;
        font-size: 32px;
        margin: 0;
        margin-bottom: 16px;
    }

    div:last-child h2{
        text-align: center;
    }
`

const Galeria = ({favoritaFoto ,fotosGaleria = [], galeriaPopulares = []}) => {
    console.log(fotosGaleria)

    return (
        <GaleriaStyled>
            <div>
                <h2>Navegue pela galeria!</h2>
                <GaleriaGeral favoritaFoto={favoritaFoto} fotosGaleria={fotosGaleria}/>
            </div>
            <div>
                <h2>Populares</h2>
                <GaleriaPopulares galeriaPopulares={galeriaPopulares}/>
            </div>
        </GaleriaStyled>
    )
}

export default Galeria;

