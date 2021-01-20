import React, { useState, useEffect } from 'react';


import {StyledLayout} from './styles/layout.style';
import Banner from './Banner'
import Map from './Map';

export default function IPTracker(props){
   return(
    <StyledLayout>
      <Banner data={props.data} 
      setData = {props.setData}
      input = {props.input}
      setInput = {props.setInput}
      isLoaded = {props.isLoaded}
      setIsLoaded = {props.setIsLoaded} 
      hasFetchError = {props.hasFetchError}
      setHasFetchError={props.setHasFetchError}  />
     {props.isLoaded && <Map />}
    </StyledLayout>
  )
}
