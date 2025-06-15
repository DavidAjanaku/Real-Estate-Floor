import { useParams, Link } from 'react-router-dom';
import { apartments } from '../data/dummyData';
import ApartmentDetail from '../components/ApartmentDetail';

function ApartmentView() {
  const { towerId, floorId, apartmentId } = useParams();
  const apartment = apartments.find(apt => 
    apt.id === parseInt(apartmentId) &&
    apt.towerId === parseInt(towerId) &&
    apt.floorId === parseInt(floorId)
  );

  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <Link to="/" className="text-blue-600 hover:underline">Towers</Link>
        <span className="mx-2">/</span>
        <Link to={`/tower/${towerId}`} className="text-blue-600 hover:underline">
          {towerId}
        </Link>
        <span className="mx-2">/</span>
        <Link to={`/tower/${towerId}/floor/${floorId}`} className="text-blue-600 hover:underline">
          Floor {floorId}
        </Link>
        <span className="mx-2">/</span>
        <span>Apartment {apartmentId}</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Apartment Details</h1>
        <Link 
          to={`/tower/${towerId}/floor/${floorId}`} 
          className="text-blue-600 hover:underline"
        >
          ← Back to Floor
        </Link>
      </div>

      <ApartmentDetail apartment={apartment} />
    </div>
  );
}

export default ApartmentView;