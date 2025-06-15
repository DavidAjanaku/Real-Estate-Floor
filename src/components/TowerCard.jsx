import { Link } from 'react-router-dom';

function TowerCard({ tower }) {
  return (
    <Link to={`/tower/${tower.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
        <img 
          src={tower.image} 
          alt={tower.name} 
          className="w-full h-48 object-cover"
          onError={(e) => e.target.src = "https://placehold.co/300x200?text=Image+Error"}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            {tower.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default TowerCard;