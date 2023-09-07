import { styled } from "styled-components";

const ModalZoomStyled = styled.dialog`
    border: none;
    position: absolute;
    top:20%;
    width: 70%;
    height:65%;
    background-color: transparent;
    padding: 0;
    color: #FDFDFD;
    form button{
        background: none;
        border: none;
        font-size: 28px;
        cursor: pointer;
        position: absolute;
        right: 16px;
        color: #FDFDFD;
        top: 8px;
    }

    h3 {
        position: absolute;
        top: 8px;
        margin: 0;
        left: 16px;
        font-weight: GandhiSansBold;
        font-size: 24px;
    }

    p {
        position: absolute;
        bottom: 8px;
        margin: 0;
        left: 16px;
        font-size: 16px;
    }
`


const ModalZoomFigureStyled = styled.figure`
    width: 100%;
    height: 100%;
    margin: 0; 

    img {
        border-radius:10px;
        width: 100%;
        height: 100%;
    }

    `
const Overlay = styled.div`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .7);
    `

const FavoritoZoomStyled = styled.button`
    width: 20px;
        height: 19px;
        background-color: transparent;
        border: none;
        position: absolute;
        right: 16px;
        color: #FDFDFD;
        bottom: 8px;
        background-image: ${props => props.$favorito ? 'url(/icones/favorito-ativo.png)' : 'url(/icones/favorito.png)'};
        cursor: pointer;
`


const ModalZoom = ({ foto, setFotoSelecionada, aoFavoritaFoto }) => {
    console.log(foto)
    return (
        <>
            {foto && <>
                <Overlay />
                <ModalZoomStyled open={!!foto}>
                    <ModalZoomFigureStyled>
                        <img src={foto?.path} alt={foto?.titulo} />
                        <h3>{foto.titulo}</h3>
                        <p>{foto.fonte}</p>
                        <FavoritoZoomStyled $favorito={foto.favorito} onClick={() => {
                            foto.favorito = foto.favorito === true ? false : true ;
                            aoFavoritaFoto(foto);
                        }}>
                        </FavoritoZoomStyled>
                        <form method="dialog" onSubmit={() => {
                            setFotoSelecionada(null);
                        }}>
                            <button>X</button>
                        </form>
                    </ModalZoomFigureStyled>
                </ModalZoomStyled>
            </>
            }
        </>
    )
    //     <GaleriaGeralCardStyled $expandida={expandida} >
    //     <img src={foto.path} alt="Imagem da galeria" />
    //     <Info>
    //         <h3>{foto.titulo}</h3>
    //         <div>
    //             <footer>{foto.fonte}</footer>
    //             <div>
    //                 <ExpandirStyled onClick={() => {
    //                     setExpandida(!expandida);
    //                     setFotoSelecionada(foto)
    //                 }}/>
    //                 <FavoritarStyled $favorito={foto.favorito} onClick={() =>{
    //                     foto.favorito = foto.favorito === true ? false : true ;
    //                     aoFavoritaFoto(foto);
    //                 }}/>
    //             </div>

    //         </div>
    //     </Info>
    // </GaleriaGeralCardStyled>
}

export default ModalZoom;