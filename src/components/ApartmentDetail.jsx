function ApartmentDetail({ apartment }) {
  if (!apartment) return <div className="text-center py-12">Apartment not found</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <img 
        src={apartment.fullImage} 
        alt={apartment.unitType} 
        className="w-full h-64 object-cover rounded-md mb-4"
        onError={(e) => e.target.src = "https://placehold.co/600x400?text=Image+Error"}
      />
      <h3 className="text-2xl font-semibold text-gray-800">{apartment.unitType}</h3>
      <p className="text-gray-600">Area: {apartment.area}</p>
      <p className="text-gray-600">Rooms: {apartment.roomCount}</p>
    </div>
  );
}

export default ApartmentDetail;