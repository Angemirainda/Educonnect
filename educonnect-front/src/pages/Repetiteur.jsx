import React from 'react';
import { Outlet } from 'react-router-dom';
import RepetiteurNav from '../components/RepetiteurNav';

function Repetiteur() {
  return (
    <div className="min-h-screen bg-gray-100 white:bg-gray-900">
      <RepetiteurNav />
      <div className="lg:ml-64">
        <main className="px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Repetiteur; 