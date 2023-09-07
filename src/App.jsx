import { styled } from "styled-components"
import { useState, useEffect } from "react"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Header from "./componentes/Header"
import BarraLateral from "./componentes/BarraLateral"
import ImagemDestaque from "./componentes/ImagemDestaque"
import TagsSection from "./componentes/TagsSection"
import Galeria from "./componentes/Galeria"
import Footer from "./componentes/Footer"
import fotos from './fotos.json'
import ModalZoom from "./componentes/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100vh;
  width: 100%;
`

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 200px auto;
  align-items: top;
  gap: 12px;
`

const AppContainer = styled.div`
 margin: 0 2.5rem;
`

const galeria =
{
  galeriaPopulares: [
    {
      foto: '/imagens/populares/foto-1.png'
    },
    {
      foto: '/imagens/populares/foto-2.png'
    },
    {
      foto: '/imagens/populares/foto-3.png'
    },
    {
      foto: '/imagens/populares/foto-4.png'
    },
    {
      foto: '/imagens/populares/foto-5.png'
    },
  ]
}


function App() {

  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState()
  const [tag, setTag] = useState(0)
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosGaleria(fotosFiltradas)
    console.log(filtro)
  }, [filtro, tag])

  const aoFavoritaFoto = (fotoFavoritada) => {

    const newGaleria = []

    fotosGaleria.forEach(fotos => {
      {
        fotos.id === fotoFavoritada.id ?
          newGaleria.push(fotoFavoritada) : newGaleria.push(fotos)
      }
    })

    setFotosGaleria(newGaleria);

  }



  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header setFiltro={setFiltro}/>
        <MainContainer>
          <BarraLateral />
          <div>
            <ImagemDestaque titulo='A galeria mais completa de fotos do espaço!' imagem='/src/assets/banner.png' />
            <TagsSection />
            <Galeria setFotoSelecionada={setFotoSelecionada} aoFavoritaFoto={aoFavoritaFoto} fotosGaleria={fotosGaleria} galeriaPopulares={galeria.galeriaPopulares} />
          </div>
        </MainContainer>
      </AppContainer>
      <Footer />
      <ModalZoom foto={fotoSelecionada} setFotoSelecionada={setFotoSelecionada} aoFavoritaFoto={aoFavoritaFoto} />
    </FundoGradiente>
  )
}

export default App
