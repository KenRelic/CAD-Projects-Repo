import styled from "@emotion/styled";


export const HeaderStyle =  styled('header')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 2rem auto;
  
  button{
    padding: 0.5rem 1rem;
    border: 1px solid #000;
    color: #000;
    background-color: #fff;
    transition: all .25s linear;
    cursor:pointer;
  }

  button:hover{
    background-color: #000;
    color: #fff;
  }

  @media all and (max-width: 768px){
    button{
      display:none;
    }

  }
`