import styled from "styled-components";

const ListStyle = styled.ul(
  ({ theme }) => `
    list-style-type: none;
    margin-right: 30px;
    overflow: auto;
`
);

export default ListStyle;
