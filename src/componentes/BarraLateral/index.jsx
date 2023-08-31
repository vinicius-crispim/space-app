import { styled } from "styled-components";
import ItemBarraLateral from "../ItemBarraLateral";

const ListaStyled = styled.ul`
    list-style: none; 
    padding: 0;
    margin: 0;
    width: 212px;
`


const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaStyled>
                    <ItemBarraLateral iconeAtivo='/icones/home-ativo.png' iconeInativo='/icones/home-inativo.png' ativo={true}>Inicio</ItemBarraLateral>
                    <ItemBarraLateral iconeAtivo='/icones/mais-curtidas-ativo.png' iconeInativo='/icones/mais-curtidas-inativo.png'>Mais vistas</ItemBarraLateral>
                    <ItemBarraLateral iconeAtivo='/icones/mais-vistas-ativo.png' iconeInativo='/icones/mais-vistas-inativo.png'>Mais curtidas</ItemBarraLateral>
                    <ItemBarraLateral iconeAtivo='/icones/novas-ativo.png' iconeInativo='/icones/novas-inativo.png'>Novas</ItemBarraLateral>
                    <ItemBarraLateral iconeAtivo='/icones/surpreenda-me-ativo.png' iconeInativo='/icones/surpreenda-me-inativo.png'>Surpreenda-me</ItemBarraLateral>
                </ListaStyled>
            </nav>
        </aside>
    )
}

export default BarraLateral;