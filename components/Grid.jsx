
import Image from 'next/image';
import styled from "@emotion/styled";

const GridStyle =  styled('div')`
  width: inherit;
  min-height: 400px;
  max-height: 500px;
display: grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr, 1fr, 1fr;
grid-column-gap:30px;
margin-top: calc(2vw + 40px);

.interactive-img{
  object-fit: cover;
  grid-column: ${(props)=> props.left? '4/8' : '1/7'};
  grid-row: ${(props)=> props.left? '2/6' : '1/5'};

}
.card{
  padding:3rem;
  font-size: 1.3rem;
 grid-column:${(props)=> props.left? '4/8' : '4/8'};
  grid-row: ${(props)=> props.left? '4/8' : '2/6'};
  z-index: 310;
  background: #fff;
}

@media all and (max-width: 776px){
  .card{
  padding:2rem;
  grid-row: 1/6 ;
  }
}

  @media all and (max-width: 744px){
    /* min-height: 600px; */
    /* max-height: 800px; */

    *{
      text-align:center;
    }

    P{
      margin-top: 1rem;
    }
    .interactive-img{
      grid-row: 1/6 ;
      grid-column: 1/8;
    }
    .card{
    padding:0;
    grid-row: 5/6 ;
    grid-column: 1/8;
    }
  }

  @media all and (max-width: 520px){
    max-height: 600px;
    .interactive-img{
      grid-row: 1/4 ;
      grid-column: 1/8;
    }
    .card{
    grid-row: 3/6 ;
    grid-column: 1/8;
    padding-top: 2rem;
    }

    h2{
      font-size: 1.5rem;
    }
  }

`

const Grid = (props) =>{
    return(
      <GridStyle>
        <div className="interactive-img">
        <Image src="/desktop/image-interactive.jpg" width={600} height={400} layout=""  className="interactive-img"/>
        </div>
        <div className="card">
           <h2>THE LEADER IN <br /> INTERACTIVE VR</h2>
           <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Iure excepturi nemo fugit, officia quo itaque molestias 
           fuga magni ex accusantium officiis facere veritatis ducimus 
           </p>
        </div>
      </GridStyle>
    )

}

export default Grid;
