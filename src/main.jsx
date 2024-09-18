import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Childcare from './pages/Childcare.jsx';
import Forms from './pages/Forms.jsx';
import About from './pages/About.jsx';
import Computer from './pages/Computer.jsx';
import Enrol from './pages/Enrol.jsx';
import Literacy from './pages/Literacy.jsx';
import Community from './pages/Community.jsx';
import Hobbies from './pages/Hobbies.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="LangwarrinCC-Deploy/" element={<Home />} />
        <Route path="LangwarrinCC-Deploy/services" element={<Services />} />
        <Route path="LangwarrinCC-Deploy/childcare" element={<Childcare />} />
        <Route path="LangwarrinCC-Deploy/forms" element={<Forms />} />
        <Route path="LangwarrinCC-Deploy/about" element={<About />} />
        <Route path="LangwarrinCC-Deploy/enrol" element={<Enrol />} />
        <Route path="LangwarrinCC-Deploy/literacy" element={<Literacy />} />
        <Route path="LangwarrinCC-Deploy/computer" element={<Computer />} />
        <Route path="LangwarrinCC-Deploy/community" element={<Community />} />
        <Route path="LangwarrinCC-Deploy/hobbies" element={<Hobbies />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
