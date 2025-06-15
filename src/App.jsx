import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TowerOverview from './pages/TowerOverview';
import FloorView from './pages/FloorView';
import ApartmentView from './pages/ApartmentView';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-4">
     <Routes>
  <Route path="/" element={<TowerOverview />} />
  <Route path="/tower/:towerId" element={<FloorView />} />
  <Route path="/tower/:towerId/floor/:floorId" element={<FloorView />} />
  <Route path="/tower/:towerId/floor/:floorId/apartment/:apartmentId" element={<ApartmentView />} />
</Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;