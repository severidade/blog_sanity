import React from 'react';

import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SinglePosts from './pages/SinglePost';
import BlogPosts from './pages/BlogPosts';
import Videos from './pages/Videos';
import Error from './pages/Error';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<SinglePosts />} />
          <Route path="/post" element={<BlogPosts />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="*" element={<Error /> } />
        </Routes>
    </>
  );
}

export default App;
