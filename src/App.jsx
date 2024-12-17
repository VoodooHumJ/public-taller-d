import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardDocente from './pages/DashboardDocente';
import DashboardEstudiante from './pages/DashboardEstudiante';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard-docente" element={<DashboardDocente />} />
        <Route path="/dashboard-estudiante" element={<DashboardEstudiante />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 