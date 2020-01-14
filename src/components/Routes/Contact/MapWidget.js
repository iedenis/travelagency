import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});


const Wrapper = styled.div`
width: 100%;
height:170px;
`

const MapContainer = (props) => {
    useEffect(() => {
        const map = L.map('map', {
            center: [31.975777, 34.809695],
            zoom: 16,
            zoomControl: false
        });

        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
            detectRetina: true,
            maxZoom: 19,
            maxNativeZoom: 17
        }).addTo(map);
        map.removeControl(map.attributionControl)
        L.Marker.prototype.options.icon = DefaultIcon;
        const marker = L.marker([31.975777, 34.809695])
        marker.addTo(map)
    }, [])


    return (
        <Wrapper  id='map' ></Wrapper>


    )
}
export default MapContainer


