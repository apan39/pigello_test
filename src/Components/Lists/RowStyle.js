import styled from "styled-components";

const RowStyle = styled.li(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    margin: 0 0 1rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
   /* &:hover { background-color: yellow; }
    &:active { background-color: red; }*/
`
);

export default RowStyle;
