import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Body from './components/Body';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Body />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </Router>   
  );
}

export default App;
