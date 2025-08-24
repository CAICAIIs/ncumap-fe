import React from 'react';

interface MapMarkProps {
    name: string;
    coordinates: [number, number];
    category: string;
    id: string;
}

const MapMark: React.FC<MapMarkProps> = ({ name, coordinates, category, id }) => {
    return (
        <div className="map-mark" data-id={id}>
            <span>{name}</span>
        </div>
    );
};
