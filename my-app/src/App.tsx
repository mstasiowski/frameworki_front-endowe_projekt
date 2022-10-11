import React from 'react';
import {FC} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Home} from "./components/Routes/Home/home";
import {Posts} from "./components/Routes/Posts/posts";



export const App:FC = () =>{
  return (
    <BrowserRouter>
    <div>
      <Link to="posts">Posts</Link>
      <Link to="/">Home</Link>
      
    </div>
    
    <Routes>
      <Route path="posts" element={<Posts />} />
      <Route index element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
};

