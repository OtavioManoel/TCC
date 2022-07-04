import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Alerts } from './pages/Alerts/Alerts';
import { Audits } from './pages/Audits/Audits';
import { Documents } from './pages/Documents/Documents'
import { Graphics } from './pages/Graphics/Graphics';
import { Home } from './pages/Home/Home';
import { Pdca } from './pages/Pdca/Pdca';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='alerts' element={<Alerts />} />
        <Route path='audits' element={<Audits />} />
        <Route path='documents' element={<Documents />} />
        <Route path='graphics' element={<Graphics />} />
        <Route path='home' element={<Home />} />
        <Route path='pdca' element={<Pdca />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
