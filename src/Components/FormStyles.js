import styled from "styled-components";

export const FormDivStyle = styled.form(
  ({ theme }) => `
    font-size: ${theme.fontSizes.headerSmall};
    margin-top: -16px;
    margin-left: 12px;
    margin-bottom: 1em;
`
);

export const LabelStyle = styled.label(
  ({ theme }) => `
    font-size: ${theme.fontSizes.headerSmall};
    display: block;
    margin-top: 10px;
    margin-left: 26px
`
);

export const SelectStyle = styled.select(
  ({ theme }) => `
    width: 100%;
    min-width: 15ch;
    max-width: 30ch;
    border: 1px solid #999;
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    margin-right: 0.5em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
`
);

export const InputSubmitStyle = styled.input(
  ({ theme }) => `
    font-size: ${theme.fontSizes.headerSmall};
    padding: .3em;
    border: 1px solid #999;
    border-radius: 4px;
    margin-left: 26px;
    margin-top: 8px;
`
);

export const InputStyle = styled.input(
  ({ theme }) => `
    font-size: ${theme.fontSizes.headerSmall};
    padding: .3em;
    border: 1px solid #999;
    border-radius: 4px;
`
);
