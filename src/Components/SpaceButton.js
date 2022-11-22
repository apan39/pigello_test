import styled from 'styled-components';

const SpaceButton = styled.h2(
  ({ theme }) => `
    font-size: ${theme.fontSizes.headerXSmall};
	background:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
	background-color:#7892c2;
	border-radius:7px;
	border:1px solid #4e6096;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:19px;
    margin-left: 36px;
	padding:12px 20px;
	text-decoration:none;
    &:hover { 	
        background:linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
        background-color:#476e9e; }
    &:active { 	
        position:relative;
        top:1px; }
`
);

export default SpaceButton;