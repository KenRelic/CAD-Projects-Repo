// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import React, { Component } from 'react';
// import 'leaflet/dist/leaflet.css'
import {StyledMapLayout} from './styles/map.style';

class Map extends Component {
  constructor(props){
    super(props)
  }



  render(){
    if (process.env.BROWSER) {
      var {Map, Marker, Popup, TileLayer} = require('react-leaflet');
      return (
        <div className="search-map">
          <Map center={position} zoom={13}>
            <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            <Marker position={position}>
              <Popup>
                <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
              </Popup>
            </Marker>
          </Map>
        </div>
      );
    }
    else {
      return (
      <StyledMapLayout>
          {/* <div>Hello</div> */}
       </StyledMapLayout>
       )
    }

    return (
      <StyledMapLayout>
        {/* //</StyledMapLayout>
            //<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
            //   <TileLayer
            //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            //   />
            //   <Marker position={[51.505, -0.09]}>
            //     <Popup>
            //       A pretty CSS3 popup. <br /> Easily customizable.
            //     </Popup>
            //   </Marker>
            // </MapContainer>
            // <div>Hello</div> */}
            <div>Hello</div>
        </StyledMapLayout>
  )}


}



export default Map;


