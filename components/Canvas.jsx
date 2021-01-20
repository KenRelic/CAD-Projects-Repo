import React, {useRef, useState, useEffect } from 'react';
import {StyledCanvas} from './styles/canvas.style';

export default function Canvas(props){

   const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#be90ff'
    let x = context.canvas.width/2;
    // context.fillRect(x, x,x, x)

    
    context.beginPath()
    context.arc(150,75, 50, 5, 2*Math.PI)
    context.stroke()
  }, [])
  

  return(
    <StyledCanvas ref={canvasRef} {...props}></StyledCanvas>
  )
}


