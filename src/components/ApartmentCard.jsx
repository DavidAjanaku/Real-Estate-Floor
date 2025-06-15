import { Link } from 'react-router-dom';
import { useState } from 'react';

function ApartmentCard({ apartment, towerId, floorId }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
     <Link
      to={`/tower/${towerId}/floor/${floorId}/apartment/${apartment.id}`}
      className="relative block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ${isHovered ? 'scale-105' : ''}`}>
        <div className={`absolute inset-0 bg-black ${isHovered ? 'opacity-20' : 'opacity-0'} transition duration-300`} />
        <img 
          src={apartment.thumbnail} 
          alt={apartment.unitType} 
          className="w-full h-40 object-cover"
          onError={(e) => e.target.src = "https://placehold.co/300x200?text=Image+Error"}
        />
        <div className="p-4">
          <h4 className="text-lg font-semibold text-gray-800">{apartment.unitType}</h4>
          <p className="text-gray-600">Area: {apartment.area}</p>
          <p className="text-gray-600">Rooms: {apartment.roomCount}</p>
        </div>
      </div>
    </Link>
  );
}

export default ApartmentCard;