import { styled } from "styled-components"

const TagStyled = styled.p`
    padding: 8px;
    border-radius: 10px;
    border: 1px solid transparent;
    background-color: rgba(217, 217, 217, .3);
    margin: 0;
    cursor: pointer;

`

const Tag = ({children}) => {
    return (
        <TagStyled>
            {children}
        </TagStyled>
    )
}

export default Tag;