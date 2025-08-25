import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // ✅ Import App component


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  {/* ✅ Use the imported App */}
  </React.StrictMode>
);
