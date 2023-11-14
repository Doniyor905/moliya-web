import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ServicesPage from './pages/ServicesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About/index.jsx';
import Contact from './pages/Contact/index.jsx';
import News from './pages/News/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}/>
				<Route path="/services/:type" element={<ServicesPage />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/contact" element={<Contact />}/>
				<Route path="/news" element={<News />}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
