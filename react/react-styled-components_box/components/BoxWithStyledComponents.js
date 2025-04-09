import styled from "styled-components";

export const BoxComponent = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props)=>props.$isBlack? "black" :"green"};
    margin: 2rem;
    &:hover {
    background-color: red;
    }
`

/*.box-with-classname {
    width: 100px;
    height: 100px;
    background-color: green;
    margin: 2rem;
  }
  
  .box-with-classname:hover {
    background-color: red;
  }
  
  .box-with-classname--black {
    background-color: black;
  }
  */
