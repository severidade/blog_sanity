import React from 'react';

import './Reset.css';
import './App.css';
import Navbar from './componentes/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SinglePosts from './pages/SinglePosts';
import BlogPosts from './pages/BlogPosts';
import Projects from './pages/Projects';
import Error from './pages/Error';

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<SinglePosts />} />
          <Route path="/post" element={<BlogPosts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error /> } />
        </Routes>
    </div>
  );
}

export default App;
