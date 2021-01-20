import React, { useState, useEffect } from 'react';

import {StyledBanner} from './styles/banner.style'
import Header from './Map';
const iconArrow = '/iptracker/icon-arrow.svg'

import fetchData from '../util/fetchData';

export default function Banner(props){
  const [errorMessage, setErrorMessage] = useState(['404','IP Not Found'])
  // console.log(props.data.time_zone.offset || 'not here');  
  return (
    <StyledBanner>
      <div className="container">
        <h1 className="title">IP Address Tracker</h1>
       <div className="search-wrapper">
          <input type="text" 
        placeholder="Search for any IP Address or domain" 
        value ={props.input}
        onChange={(e)=> props.setInput(e.target.value)}
        />
        <button className="submit-btn" type="button"
        onClick={async ()=>{
          props.setData(await fetchData(props.input , props.data, props.setIsLoaded, props.setHasFetchError, errorMessage, setErrorMessage));
          console.log('submitted')}}></button>
       </div>
       
        <div className="result-section">
        { !props.hasFetchError ? 
          <><div className="criteria">
              <h2 className="sub-title">IP ADDRESS</h2>
              <p className="result-value">{props.data.ip}</p>
            </div>
            <div className="separator"></div>
            <div className="criteria">
              <h2 className="sub-title">LOCATION</h2>
              <p className="result-value">{ props.isLoaded ? (props.data.district + ' ' + props.data.state_prov + ', ' + props.data.country_name):
              props.data.location.city +', '+ props.data.location.region + ', ' + props.data.location.country}</p>
            </div>
            <div className="separator"></div>
            <div className="criteria">
              <h2 className="sub-title">TIMEZONE</h2>
              <p className="result-value">{props.isLoaded ? `${+props.data.time_zone.offset}:00`: props.data.location.timezone}</p>
            </div>
            <div className="separator"></div>
            <div className="criteria">
              <h2 className="sub-title">ISP</h2>
              <p className="result-value">{props.data.isp}</p>
            </div></> :
          <div className="error-message">
            <h2 className="sub-title">{errorMessage[0]}</h2>
            <p className="result-value">{errorMessage[1]}</p>
          </div>}
        </div>

      </div>
    </StyledBanner>
  )
}