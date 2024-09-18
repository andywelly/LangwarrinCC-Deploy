import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
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

const basename = '/LangwarrinCC-Deploy';

const App = () => (
  <Router basename={basename}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="childcare" element={<Childcare />} />
      <Route path="forms" element={<Forms />} />
      <Route path="about" element={<About />} />
      <Route path="enrol" element={<Enrol />} />
      <Route path="literacy" element={<Literacy />} />
      <Route path="computer" element={<Computer />} />
      <Route path="community" element={<Community />} />
      <Route path="hobbies" element={<Hobbies />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
