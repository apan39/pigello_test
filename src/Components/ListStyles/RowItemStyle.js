import styled from "styled-components";

const RowItem = styled.div(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 3px;
    margin-right: 5px;
    font-size: ${theme.fontSizes.headerXSmall};
    transition: all 0.2s ease-in-out;
    &:hover { background-color: yellow; cursor: pointer; }
    &:active { background-color: red; }
`
);

export default RowItem;
