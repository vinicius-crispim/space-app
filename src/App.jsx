import { styled } from "styled-components"
import { useState } from "react"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Header from "./componentes/Header"
import BarraLateral from "./componentes/BarraLateral"
import ImagemDestaque from "./componentes/ImagemDestaque"
import TagsSection from "./componentes/TagsSection"
import Galeria from "./componentes/Galeria"
import Footer from "./componentes/Footer"
import fotos from './fotos.json'
const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100vh;
  width: 100%;
`
const MainContainer =styled.main`
  display: grid;
  grid-template-columns: 200px auto;
  align-items: top;
  gap: 12px;
`

const AppContainer =styled.div`
 margin: 0 2.5rem;
`


const galeria = 
{
  galeriaGeral : [
    {
        nomeFoto: 'Nome da Foto',
        informacoesFoto: 'Fonte/Fotógrafo/Satélite',
        foto: '/imagens/galeria/foto-1.png',
        favorito: false
      },
      {
        nomeFoto: 'Nome da Foto',
        informacoesFoto: 'Fonte/Fotógrafo/Satélite',
        foto: '/imagens/galeria/foto-2.png',
        favorito: false
      },
      {
        nomeFoto: 'Nome da Foto',
        informacoesFoto: 'Fonte/Fotógrafo/Satélite',
        foto: '/imagens/galeria/foto-3.png',
        favorito: false
      },
      {
        nomeFoto: 'Nome da Foto',
        informacoesFoto: 'Fonte/Fotógrafo/Satélite',
        foto: '/imagens/galeria/foto-4.png',
        favorito: false
      },
      {
        nomeFoto: 'Nome da Foto',
        informacoesFoto: 'Fonte/Fotógrafo/Satélite',
        foto: '/imagens/galeria/foto-5.png',
        favorito: false
      },
      {
        nomeFoto: 'Nome da Foto',
        informacoesFoto: 'Fonte/Fotógrafo/Satélite',
        foto: '/imagens/galeria/foto-6.png',
        favorito: false
      },
      {
        nomeFoto: 'Nome da Foto',
        informacoesFoto: 'Fonte/Fotógrafo/Satélite',
        foto: '/imagens/galeria/foto-7.png',
        favorito: false
      },
      {
        nomeFoto: 'Nome da Foto',
        informacoesFoto: 'Fonte/Fotógrafo/Satélite',
        foto: '/imagens/galeria/foto-8.png',
        favorito: false
      },
      {
        nomeFoto: 'Nome da Foto',
        informacoesFoto: 'Fonte/Fotógrafo/Satélite',
        foto: '/imagens/galeria/foto-9.png',
        favorito: false
      },
      {
        nomeFoto: 'Nome da Foto',
        informacoesFoto: 'Fonte/Fotógrafo/Satélite',
        foto: '/imagens/galeria/foto-10.png',
        favorito: false
      }
    ],
    galeriaPopulares: [
      {
        foto:'/imagens/populares/foto-1.png'
      },
      {
        foto:'/imagens/populares/foto-2.png'
      },
      {
        foto:'/imagens/populares/foto-3.png'
      },
      {
        foto:'/imagens/populares/foto-4.png'
      },
      {
        foto:'/imagens/populares/foto-5.png'
      },
    ]
  }


function App() {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoFavoritada, setFotoFavoritada] = useState();
  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
      <Header/>
      <MainContainer>
        <BarraLateral/>
        <div>
          <ImagemDestaque titulo='A galeria mais completa de fotos do espaço!' imagem='/src/assets/banner.png'/>
          <TagsSection />
          <Galeria fotosGaleria={fotosGaleria} galeriaPopulares={galeria.galeriaPopulares}/>
        </div>
      </MainContainer>
      </AppContainer>
      <Footer/>
    </FundoGradiente>
  )
}

export default App
