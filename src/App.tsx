// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe Router
import Header from './components/Header';
import HomeTest from './pages/HomeTest';

function App() {
  return (
    <Router> {/* Utilize Router aqui */}
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
