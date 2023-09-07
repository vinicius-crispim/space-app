import { useEffect, useState } from "react"
import { styled } from "styled-components"
import Botao from "../../../Botao"

const GaleriaGeralCardStyled = styled.figure`
    display: flex;
    width: 380px;
    box-sizing: border-box;
    flex-direction: column;
    margin: 0;
    

    @media (max-width: 1300px) {
    width: ${props => props.$expandida ? '90%' : '320px'};
    }

    & > img{
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
`
const Info = styled.figcaption`
    display: flex;
    height: 95px;
    width:100%;
    flex-wrap: wrap;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #001634;
    justify-content: center;
    flex-direction: column;
    padding: 10px 20px;
    box-sizing: border-box;

    h3{
        width: 80%;
    }

    h3, footer{
        color: #FFFFFF;
        padding: 0;
        margin: 0;   
        font-size:20px;
        font-family: GandhiSansBold;
    }

    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    footer{
        font-size: 17px;
    }

    button, a {
        width: 20px;
        height: 19px;
        background-color: transparent;
        background-size: cover;
        cursor: pointer;
        border: none;
    }
`

const FavoritarStyled = styled.button`
    background-image: ${props => props.$favorito ? 'url(/icones/favorito-ativo.png)' : 'url(/icones/favorito.png)'};
    &:hover{
        cursor: pointer;
    }
`
const ExpandirStyled = styled.a`
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/icones/expandir.png');
    margin-right: 12px;
    &:hover{
        cursor: pointer;
    }

`


const GaleriaGeralCard = ({ setFotoSelecionada = { setFotoSelecionada }, aoFavoritaFoto, foto }) => {
    return (
        // <GaleriaGeralCardStyled>
        //     <img src={foto.path}></img>
        //     <Info>
        //         <p>{foto.titulo}</p>
        //         <div>
        //             <p>{foto.fonte}</p>
        //             <div>
        //                 {/* <FavoritarStyled $favorito={card.favorito}
        //                 onClick={() => {
        //                     {card.favorito === true ? setCard({favorito : false})
        //                         : setCard({favorito: true})
        //                     };
        //                     console.log(card)
        //                 }}
        //                 />
        //                 <ExpandirStyled $backgroundImage='/icones/expandir.png' onClick={()=>{
        //                     console.log('expandido')
        //                 }}/> */}
        //             </div>
        //         </div>
        //     </Info>
        // </GaleriaGeralCardStyled>
        <GaleriaGeralCardStyled>
            <img src={foto.path} alt="Imagem da galeria" />
            <Info>
                <h3>{foto.titulo}</h3>
                <div>
                    <footer>{foto.fonte}</footer>
                    <div>
                        <ExpandirStyled href="#" onClick={() => {
                            setFotoSelecionada(foto)
                        }}>

                        </ExpandirStyled>
                        <FavoritarStyled $favorito={foto.favorito} onClick={() => {
                            foto.favorito = foto.favorito === true ? false : true;
                            aoFavoritaFoto(foto);
                        }} />
                    </div>

                </div>
            </Info>
        </GaleriaGeralCardStyled>
    )
}


export default GaleriaGeralCard;