"use client"
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

let windowWidth = window.innerWidth;

let iconSize;
if (windowWidth <= 460) {
  iconSize = windowWidth * 0.15;
} else {
  iconSize = 60; 
}
const customIcon = new L.Icon({
  iconUrl: '/icons/red.webp',
  iconSize: [iconSize, iconSize],
});
const MapConfig = ({ position }: { position: [number, number] }) => {
    return (
        <MapContainer center={position} className='w-full h-full rounded-3xl shadow-md shadow-md-down' zoom={20} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
            <Popup>
                A pretty CSS3 popup.
            </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapConfig;
