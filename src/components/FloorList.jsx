import { Link } from 'react-router-dom';

function FloorList({ floors, towerId }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {floors.map((floor) => (
        <Link
          key={floor.id}
          to={`/tower/${towerId}/floor/${floor.id}`}
          className="relative bg-white rounded-lg shadow-md p-4 text-center transform transition duration-300 hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity rounded-lg" />
          <h4 className="text-lg font-medium text-gray-800 relative z-10">
            {floor.name}
          </h4>
        </Link>
      ))}
    </div>
  );
}

export default FloorList;