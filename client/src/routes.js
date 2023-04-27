import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NewNews from './components/NewNews';
import Contact from './components/Contact';

const AppRoute=()=>{
  return(
    <BrowserRouter>
    <Routes>
      {/* route takes an element and its path */}
      <Route path='/' element={<Home/>}></Route>
      <Route path='/newnews' element={<NewNews/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
};
export default AppRoute;