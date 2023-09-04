import { styled } from "styled-components"
import Tag from "./Tags";

const TagsSectionStyled = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 20px;
    color: #D9D9D9;
    font-weight: 200;
    font-size: 24px;
    margin: 12px 0;
    p:first-child {
        margin-right: 24px;
    }
`

const TagsSection = () => {
    return (
        <TagsSectionStyled>
            <p>Busque por tags:</p>
            <Tag>Estrelas</Tag>
            <Tag>Galaxias</Tag>
            <Tag>Lua</Tag>
            <Tag>Planetas</Tag>
            <Tag>Todas</Tag>
        </TagsSectionStyled>
    )
}

export default TagsSection;