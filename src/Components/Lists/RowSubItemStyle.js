import styled from "styled-components";

const RowSubItemStyle = styled.div(
  ({ theme }) => `
    width: 100%;
    margin-left: 14px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    font-weight: ${theme.fontWeights.headerLarge};
`
);

export default RowSubItemStyle;
