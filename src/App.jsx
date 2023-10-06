import MyFormPage from './pages/my-form-page';
import './App.css';
import MyFormsPage from './pages/my-forms-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/my-forms" element={<MyFormsPage />} />
        <Route path="/form-archive" element={<MyFormsPage />} />
        <Route path="/form-trash" element={<MyFormsPage />} />
        <Route path="/my-form" element={<MyFormPage  />} />
        
        <Route path="/my-form/:id" element={<MyFormPage  />} />
        <Route path="/my-form/:id/create" element={<MyFormPage  />} />
        <Route path="/my-form/:id/config" element={<MyFormPage  />} />
        <Route path="/my-form/:id/conect" element={<MyFormPage  />} />
        <Route path="/my-form/:id/results" element={<MyFormPage  />} />
        <Route path="/my-form/:id/share" element={<MyFormPage  />} />

        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

