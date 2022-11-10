import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './routes/Routes'
import './App.css';
import Login from "./pages/login/Login"
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
