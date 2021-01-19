import React, {useRef, useState, useEffect } from 'react';
import {StyledCanvas} from './styles/canvas.style';

export default function Canvas(props){

   const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#2d203f'
    let x = context.canvas.width/2;
    // context.fillRect(x, x,x, x)

    
    // context.beginPath()
    // context.arc(x,y, 2, 0, 2*Math.PI)
    // context.fill()
  }, [])
  

  return(
    <StyledCanvas ref={canvasRef} {...props}></StyledCanvas>
  )
}


