import React from 'react';
import Dashboard from './Pages/Dashboard';
import Header from './component/Header';
import MaxWidth from './component/MaxWidth';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import TicketList from './Pages/TicketList';
import TicketForm from './Pages/TicketForm';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Footer from './Pages/Footer';

const App = () => {
  return (
    <div className="app-root">
      <Header />
      <MaxWidth>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path="/app" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
            <Route index element={<Navigate to="tickets" replace />} />
            <Route path="tickets" element={<TicketList />} />
            <Route path="tickets/new" element={<TicketForm />} />
            <Route path="tickets/:id/edit" element={<TicketForm />} />
          </Route>
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </MaxWidth>
      <Footer />
    </div>
  )
}
export default App
