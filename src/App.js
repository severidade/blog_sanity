import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga4";

import Home from './pages/Home';
import SinglePosts from './pages/SinglePost';
import BlogPosts from './pages/BlogPosts';
import Videos from './pages/Videos';
import Error from './pages/Error';

function App() {
  
  const TRACKING_ID = 'G-15JWETV5YR'
 
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.gtag({ hitType: "pageview", page: document.location.pathname });
  }, []);

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<SinglePosts />} />
          <Route path="/post" element={<BlogPosts />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="*" element={<Error /> } />
        </Routes>
      </Provider>
    </>
  );
}

export default App;

