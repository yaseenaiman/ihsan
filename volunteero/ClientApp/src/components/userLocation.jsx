import React, { useEffect } from "react";

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const UserLocation = () => {
    useEffect(() => {
        // Create a Leaflet map instance
        const map = L.map('map').setView([33.307094670371264, 44.44873840901978], 13);

        // Add the OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © OpenStreetMap contributors',
        }).addTo(map);

        // Add a marker to the map
        L.marker([33.307094670371264, 44.44873840901978]).addTo(map);
    }, []);

    return <div id="map" style={{ height: '400px' }}></div>;
};

export default UserLocation;
