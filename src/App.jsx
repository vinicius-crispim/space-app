import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Header from "./componentes/Header"
import BarraLateral from "./componentes/BarraLateral"
import ImagemDestaque from "./componentes/ImagemDestaque"
import TagsSection from "./componentes/TagsSection"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100vh;
  width: 100%;

`
const MainContainer =styled.main`
  
  display: grid;
  grid-template-columns: 210px auto;
  align-items: top;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <Header/>
      <MainContainer>
        <BarraLateral/>
        <div>
          <ImagemDestaque titulo='A galeria mais completa de fotos do espaço!' imagem='/src/assets/banner.png'/>
          <TagsSection />
        </div>
      </MainContainer>
    </FundoGradiente>
  )
}

export default App
