import { styled } from "styled-components"

const GaleriaGeralCardStyled = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    flex-wrap: wrap;
    img{
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }
    `
const Info = styled.div`
    flex-grow: 1;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #001634;
    justify-content: center;
    flex-direction: column;
    padding: 5px 20px;
    p{
        color: #FFFFFF;
        padding: 0;
        margin: 0;
        font-size: 16px;
    }
    p:first-child{
        font-size:22px;
        font-family: GandhiSansBold;
    }
`

const GaleriaGeralCard = ({foto, nomeFoto, informacoesFoto}) => {
    return (
        <GaleriaGeralCardStyled>
            <img src={foto}></img>
            <Info>
                <p>{nomeFoto}</p>
                <p>{informacoesFoto}</p>
            </Info>
        </GaleriaGeralCardStyled>
    )
}

export default GaleriaGeralCard;