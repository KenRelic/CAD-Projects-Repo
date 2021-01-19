import styled from "@emotion/styled";

const PageLayout = styled('div')`
  width: 100%;
  margin: 0 auto;
  *{
    padding:0;
    margin: 0;
    box-sizing:border-box;
  }
  h1{
    font-size: 4rem;
    border: 1px solid #fff;
    padding: 2rem 3rem;
    color: #fff;
    width: 700px;
    line-height: 1.4;
    text-align:left;
    /* font-family: 'Alata', sans-serif; */
    font-weight: 400;
    letter-spacing: 5px;
    overflow: hidden;
  }
  h2{
    font-size: 2.5rem;
  }

  @media all and (max-width: 776px){
   h1{
     font-size: 3rem;
     width: calc(100%);
     margin: 0 auto;
   }
   h2{
     font-size: 2rem;
     text-align: center;
   }
  }

  @media all and (max-width: 476){
   h1{
    padding: 1rem  !important;
     font-size: 1.5rem;
     margin: 0 auto;
   }
   
   h2{
     font-size: 1.5rem;
   }
  }
`

export default PageLayout