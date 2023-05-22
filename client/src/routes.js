import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import NewNews from './components/NewNews';
import Contact from './components/Contact';
import EditNews from './components/EditNews';
import ShowNews from './components/ShowNews';
import NavBar from './components/Navbar';
import Toast from './components/utils/Toasts';
import PageNotFound from './components/PageNotFound';

const AppRoute=()=>{
  return(
    <BrowserRouter>
			<NavBar />
			<Toast/>
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/news/new" element={<NewNews />} />
					<Route path="/news/:id" element={<ShowNews />} />
					<Route path="/news/:id/edit" element={<EditNews />} />
					<Route path="*" element={<PageNotFound/>} />

				</Routes>
			</Container>
		</BrowserRouter>
  )
};
export default AppRoute;