
import Image from 'next/image';
import styled from "@emotion/styled";

const works = [
  {key: 1, title: 'DEEP EARTH', imageUrl: '/image-deep-earth.jpg'},
  {key: 2, title: 'NIGHT ARCADE',imageUrl:  '/image-night-arcade.jpg'},
  {key: 3, title: 'SOCCER TEAM VR',imageUrl:  '/image-soccer-team.jpg'},
  {key: 4, title: 'THE GRID', imageUrl:  '/image-grid.jpg'},
  {key: 5, title: 'FROM UP ABOVE VR' ,imageUrl:   '/image-from-above.jpg'},
  {key: 6, title: 'POCKET BOREALIS', imageUrl:  '/image-pocket-borealis.jpg'},
  {key: 7, title: 'THE CURIOSITY', imageUrl:  '/image-curiosity.jpg'},
  {key: 8, title: 'MAKE IT FISHEYE', imageUrl:  '/image-fisheye.jpg'}
];

const CardDesktopStyle = styled('div')`
 
  height: 350px;
  width: 200px;
  position: relative;
  margin: 20px 0;
  :hover .image-card{
    opacity: 0.5;
  }
  :hover > .work-title{
    color: #000;
  }

  .work-title{
    position:absolute;
    bottom: 0;
    width: 100%;
    padding: 0 2rem 2rem 2rem;
    height: 80px;
    font-size: 1.5rem;
    color: #fff;
  }

  @media all and (max-width:768px){
   display:  none;
  
  }
`
export const CardDesktop = (props) =>{
  return(       
      works.map((card) => (
        <CardDesktopStyle key={'work' + card.key} height={props.height} width={props.width}>
              <Image src={'/desktop' + card.imageUrl} className="image-card" width = {props.width} height={props.height} layout="responsive" />
              <h3 className="work-title">{card.title}</h3>
        </CardDesktopStyle>
    )) 
  )
}

const CardMobileStyle = styled('div')`
  display:none;

  

  /* height: 100px ; */
  overflow:hidden;
  width: auto;
  position: relative;
  margin: 0;
  :hover .image-card{
    opacity: 0.5;
  }
  :hover > .work-title{
    color: #000;
  }

  .work-title{
    position:absolute;
    bottom: 0;
    width: 100%;
    padding: 0 2rem 2rem 2rem;
    /* height: 80px; */
    font-size: 1.7rem;
    color: #fff;
  }

  @media all and (max-width:768px){
   height: 100px;
   width: 100%;
   margin: 5px auto;
   display:  initial;

   .work-title{
     font-size: 1rem;
     top: 15px;
     padding: 0 0 0 1rem;
   }
  }
`


export const CardMbile = (props) =>{
  return(       
      works.map((card) => (
        <CardMobileStyle key={'work' + card.key} height={props.height} width={props.width}>
              <Image src={'/mobile' +card.imageUrl} className="image-card" width = {props.width} height={props.height} layout="responsive" />
              <h3 className="work-title">{card.title}</h3>
        </CardMobileStyle>
    )) 
  )
}

