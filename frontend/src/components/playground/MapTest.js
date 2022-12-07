import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import 'mapbox-gl/dist/mapbox-gl.css'

const StyledMap = styled.div`
    // .mapboxgl-canvas { 
    //     position: absolute;
    //     top: 0;
    //     bottom: 0;
    //     left: 0;
    //     right: 0;
    // }
  
    .sidebarStyle {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        margin: 12px;
        background-color: #404040;
        color: #ffffff;
        z-index: 1 !important;
        padding: 6px;
        font-weight: bold;
    }
  
`

export default () => {
    const mapRef = useRef(null);

    const [ lon, setLon ] = useState(87.65);
    const [ lat, setLat ] = useState(41.84);
    const [ size, setSize ] = useState(9)
    
    const geoJson = {
        "features": [
          {
            "type": "Feature",
            "properties": {
              "title": "Lincoln Park",
              "description": "A northside park that is home to the Lincoln Park Zoo"
            },
            "geometry": {
              "coordinates": [-87.637596, 41.940403],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Burnham Park",
              "description": "A lakefront park on Chicago's south side"
            },
            "geometry": {
              "coordinates": [-87.603735, 41.829985],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Millennium Park",
              "description": "A downtown park known for its art installations and unique architecture"
            },
            "geometry": {
              "coordinates": [-87.622554, 41.882534],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Grant Park",
              "description": "A downtown park that is the site of many of Chicago's favorite festivals and events"
            },
            "geometry": {
              "coordinates": [-87.619185, 41.876367],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Humboldt Park",
              "description": "A large park on Chicago's northwest side"
            },
            "geometry": {
              "coordinates": [-87.70199, 41.905423],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Douglas Park",
              "description": "A large park near in Chicago's North Lawndale neighborhood"
            },
            "geometry": {
              "coordinates": [-87.699329, 41.860092],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Calumet Park",
              "description": "A park on the Illinois-Indiana border featuring a historic fieldhouse"
            },
            "geometry": {
              "coordinates": [-87.530221, 41.715515],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Jackson Park",
              "description": "A lakeside park that was the site of the 1893 World's Fair"
            },
            "geometry": {
              "coordinates": [-87.580389, 41.783185],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Columbus Park",
              "description": "A large park in Chicago's Austin neighborhood"
            },
            "geometry": {
              "coordinates": [-87.769775, 41.873683],
              "type": "Point"
            }
          }
        ],
        "type": "FeatureCollection"
      }
    

    mapboxgl.accessToken ="pk.eyJ1IjoiamFjay1mdXIiLCJhIjoiY2xiZHl1YWV3MDY1bTNvbmt1emdycmJ6ZiJ9.u75JCCBbtBgqEtRsF6OwYw";
    useEffect(() => {
        const map = new mapboxgl.Map({
            container:  mapRef.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [lon, lat], // starting position [lng, lat]
            zoom: size // starting zoom
        });

        map.addControl(new mapboxgl.NavigationControl(), "top-right");
        // geoJson.features.map((feature) =>
        //     new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
        // );        
        return () => map.remove();
    })

        
    return (
        <StyledMap>
            <div> lon: {lon}, lat: {lat}, size: {size}</div><button onClick={() => {setLat(e => (e+0.001))}}> +0.001 </button>
            <div ref={mapRef} style={{width: "100%", height: "100%"}} />
        </StyledMap>
    )
}