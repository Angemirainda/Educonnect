import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './admin/Header';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100 white:bg-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto py-4 sm:px-4 lg:px-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin; 