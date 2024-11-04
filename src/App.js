import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import './assets/styles/main.scss'
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar';
import MyForm from './pages/form';
import MovieInfo from './pages/movie-info';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<MyForm />} />
          <Route path="/movie/:movieId" element={<MovieInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
