import { towers } from '../data/dummyData';
   import TowerCard from '../components/TowerCard';

   function TowerOverview() {
     return (
       <div className="container mx-auto p-4">
         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Select a Tower</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           {towers.map((tower) => (
             <TowerCard key={tower.id} tower={tower} />
           ))}
         </div>
       </div>
     );
   }

   export default TowerOverview;