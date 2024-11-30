import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './assets/styles/main.scss'
import Home from './pages/home';
import Header from './components/header';
import Actor from './pages/actor';
import TodoApp from './pages/todo';
import PostsApp from './pages/post';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/actor" element={<Actor/>} />
          <Route path="/todo" element={<TodoApp/>} />
          <Route path="/post" element={<PostsApp/>} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
