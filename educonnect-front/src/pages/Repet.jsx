import React from 'react';
import { Outlet } from 'react-router-dom';
import RepetNavbar from '../components/RepetNavbar';

function Repet() {
  return (
    <div className="min-h-screen bg-gray-100 white:bg-gray-900">
      <RepetNavbar />
      <div className="lg:ml-64">
        <main className="px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Repet; 