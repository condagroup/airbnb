import React from 'react'
import ReactMapGL from 'react-map-gl';


function Map() {

    const [viewport, setViewport] = React.useState({
        
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11
    });



    return (
        <ReactMapGL 
        mapStyle="mapbox://styles/bhavik-khawale/cks0i6lh31bct17p78xe4p159"
        mapboxApiAccessToken="pk.eyJ1IjoiYmhhdmlrLWtoYXdhbGUiLCJhIjoiY2tzMGkzMzRkMGFuZjJwcGVvMnZ5ZjJnNSJ9.NHWzNhAzAMSv9HJN4-_aEQ"
        {...viewport}
        >
            
        </ReactMapGL>
    )
}

export default Map
