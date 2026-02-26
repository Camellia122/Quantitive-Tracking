/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Overview } from './pages/Overview';
import { Equity } from './pages/Equity';
import { FixedIncome } from './pages/FixedIncome';
import { Commodities } from './pages/Commodities';
import { Macro } from './pages/Macro';
import { Alerts } from './pages/Alerts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="equity" element={<Equity />} />
          <Route path="fixed-income" element={<FixedIncome />} />
          <Route path="commodities" element={<Commodities />} />
          <Route path="macro" element={<Macro />} />
          <Route path="alerts" element={<Alerts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
