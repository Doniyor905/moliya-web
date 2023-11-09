import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ServicesPage from './pages/ServicesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}/>
				<Route path="/services/:type" element={<ServicesPage />}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
