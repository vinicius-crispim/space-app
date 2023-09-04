import {
    styled
} from "styled-components"
import GaleriaGeral from "./GaleriaGeral";
import GaleriaPopulares from "./GaleriaPopulares";
const GaleriaStyled = styled.div`
    display: grid;
    grid-template-columns : 75% 25%;
    gap: 16px;
    
    margin: 24px 0;
    
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

const Galeria = ({galeriaGeral, galeriaPopulares}) => {
    return (
        <GaleriaStyled>
            <div>
                <h2>Navegue pela galeria!</h2>
                <GaleriaGeral galeriaGeral={galeriaGeral}/>
            </div>
            <div>
                <h2>Populares</h2>
                <GaleriaPopulares galeriaPopulares={galeriaPopulares}/>
            </div>
        </GaleriaStyled>
    )
}

export default Galeria;

