import styled from "styled-components";


export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
display: -webkit-flex;
display: -moz-flex;
display: flex;
-webkit-flex-flow: row nowrap;
-moz-flex-flow: row nowrap;
flex-flow: row nowrap;
`;

export const FlexItem = styled.div`
margin: 5px;
flex: 1 1 auto;
display: flex;
flex-flow: column wrap;
justify-content: space-between;
padding-left: 20px;
`;
export const ImgBox = styled.div`
flex: 0 0 30%;
min-height: 150px;
`;


export const Img = styled.img`
width: 100%;
hight: 100%;
 object-fit: cover;

`;
// если хотите, чтобы чтобы изображение масштабировалась пропорционально


export const AddInfo = styled.div`
margin-top: 20px;
  max-width: 960px;
 padding-top: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;




