import { useParams, Link } from 'react-router-dom';
import { towers, floors, apartments } from '../data/dummyData';
import FloorList from '../components/FloorList';
import ApartmentCard from '../components/ApartmentCard';

function FloorView() {
  const { towerId, floorId } = useParams();
  const tower = towers.find(t => t.id === parseInt(towerId));
  const floorApartments = apartments.filter(apt => 
    apt.towerId === parseInt(towerId) && 
    apt.floorId === parseInt(floorId)
  );

  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <Link to="/" className="text-blue-600 hover:underline">Towers</Link>
        <span className="mx-2">/</span>
        <span>{tower?.name}</span>
        {floorId && (
          <>
            <span className="mx-2">/</span>
            <span>Floor {floorId}</span>
          </>
        )}
      </div>

      {!floorId ? (
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Floors in {tower?.name}</h1>
          <FloorList floors={floors} towerId={towerId} />
        </>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Floor {floorId}</h1>
            <Link 
              to={`/tower/${towerId}`} 
              className="text-blue-600 hover:underline"
            >
              ← Back to Floors
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {floorApartments.map(apartment => (
              <ApartmentCard 
                key={apartment.id} 
                apartment={apartment} 
                towerId={towerId} 
                floorId={floorId} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default FloorView;