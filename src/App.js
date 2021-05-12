import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

function App() {

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 2
  });


  return (
    <>
    <div className="header">
      <div className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <h6 className="mx-auto navbar-brand">
            Global Vaccination Tracker
          </h6>
        </div>
      </div>
    </div>
    <div className="map">
       <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle="mapbox://styles/saket2000/ckolf18ga1lxq17l31rw3lrxk"
      > 
      </ReactMapGL>
    </div>
    </>
  );
}

export default App;
