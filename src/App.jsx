import React from 'react';
import './App.scss';

import 'swiper/css';
import 'swiper/css/pagination';

import HeaderMenu from './components/HeaderMenu';
import HeaderSlider from './components/HeaderSlider';
import Services from './components/Services';
import Teams from './components/Teams';
import Testimonials from './components/Testimonials';
import Order from './components/Order';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {

	const [modal, setModal] = React.useState();


	return (
		<>
			<HeaderMenu />
			<HeaderSlider modal={modal} setModal={setModal} />
			<Services />
			<Order />
			<Teams />
			<Testimonials />
			<Clients />
			<Footer modal={modal} setModal={setModal} />
			<Modal modal={modal} setModal={setModal} />
		</>
	);
}

export default App;
