import * as React from 'react';

import { Routes, Route } from 'react-router-dom';

import Gender from '../../src/pages/Gender';
import Season from '../../src/pages/Season';
import Period from '../../src/pages/Period';
import ListThings from '../../src/pages/ListThings';
import TypeTrip from '../../src/pages/TypeTrip';
import NotFoundPage from '../../src/pages/NotFoundPage';

export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Gender />} />
        <Route path="/season" element={<Season />} />
        <Route path="/period" element={<Period />} />
        <Route path="/list-things" element={<ListThings />} />
        <Route path="/type-trip" element={<TypeTrip />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
