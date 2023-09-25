import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import MyFormPage from './pages/my-form-page';
import './App.css';
import MyFormsPage from './pages/my-forms-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyFormsPage />} />
        <Route path="/my-form" element={<MyFormPage count={count} setCount={setCount} />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
