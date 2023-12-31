import { styled } from "styled-components"
import Tag from "./Tags";
import tags from "./mockTags.json";

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

const TagsSection = ({setTag}) => {
    return (
        <TagsSectionStyled>
            <p>Busque por tags:</p>
            {tags.map(tag => <Tag setTag={setTag} tag={tag} key={tag.id}>{tag.titulo}</Tag>)}
        </TagsSectionStyled>
    )
}

export default TagsSection;