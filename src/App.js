import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './routes/Routes'
import './App.css';
import Login from "./pages/login/Login"
import Dashboard from "./pages/dashboard/Dashboard";
import Clients from "./pages/clients/Client";
import Form from "./pages/components/Form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
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
          <Route
            path='/client'
            element={
              <PrivateRoute>
                <Clients />
              </PrivateRoute>
            }
          />
          <Route
            path='/form'
            element={
              <PrivateRoute>
                <Form />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
