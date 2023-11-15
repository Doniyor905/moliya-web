import React from 'react';
import { Link, useHref, useLocation, useParams } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu';
import Container from '../../layout/Container';
import classes from './ServicesPage.module.scss';
import Buxgalteriya from '../../routes/Buxgalteriya';
import Yurudik from '../../routes/Yurudik';
import classNames from 'classnames';
import Dekloratsiya from '../../routes/Dekloratsiya';
import Moliya from '../../routes/Moliya';
import Hr from '../../routes/Hr';
import DavlarHaridlar from '../../routes/DavlatHaridlar';
import Matbaa from '../../routes/Matbaa';
import Mamlakat from '../../routes/Mamlakat';
import Footer from '../../components/Footer';
const ServicesPages = () => {
	const { type } = useParams();
	const [accordion, setAccordion] = React.useState(false);

	const toggleAccordion = () => {
		setAccordion(!accordion);
	};

	const asideData = [
		{
			title: 'Buxgalteriya xizmati',
			link: '/services/buxgalteriya',
			nameComp: <Buxgalteriya />,
			type: 'buxgalteriya'
		},
		{
			title: 'Yuridik xizmatlar',
			link: '/services/yuridik',
			nameComp: <Yurudik />,
			type: 'yuridik'
		},
		{
			title: 'Moliyaviy va iqtisodiy yordam',
			link: '/services/moliya',
			nameComp: <Moliya />,
			type: 'moliya'

		},
		{
			title: 'Tovarlarning elektron deklaratsiyasi',
			link: '/services/dekloratsiya',
			nameComp: <Dekloratsiya />,
			type: 'dekloratsiya'

		},
		{
			title: 'HR xizmatlar',
			link: '/services/hr',
			nameComp: <Hr />,
			type: 'hr'

		},
		{
			title: 'Davlat xaridlari bo\'yicha vositachilik xizmatlari',
			link: '/services/davlat-xaridlari-boyicha-vositachilik-xizmatlari',
			nameComp: <DavlarHaridlar />,
			type: 'davlat-xaridlari-boyicha-vositachilik-xizmatlari'

		},
		{
			title: 'Matbaa (poligrafiya) xizmatlari',
			link: '/services/matbaa',
			nameComp: <Matbaa />,
			type: 'matbaa'

		},
		{
			title: 'Mamlakat ichida ham, chet elda ham logistika xizmati',
			link: '/services/mamlakat',
			type: 'mamlakat',
			nameComp: <Mamlakat />


		},
		{
			title: 'Litsenziyalar va sertifikatlar olishda yordam berish',
			link: '/services/litsenziyalar',
			type: 'litsenziyalar',
			nameComp: 'Litsenziyalar'

		}
	];
	const location = useLocation();
	return (
		<>
			<HeaderMenu />
			<Container>
				<div className={classes['services']}>

					<div className={classes['services__wrapper']}>
						<div className={accordion === true ? classNames(classes['services__accordion-wrapper'], classes['active']) : classes['services__accordion-wrapper']}>
							<div onClick={() => toggleAccordion(accordion)} className={classes['services__accordion']}>
								Xizmatni tanlash
							</div>
							<aside className={classes['services__aside']}>
								<ul>
									{asideData.map((nav, i) => (
										<li key={i} onClick={() => toggleAccordion(false)} className={classes['services__aside-link']}>
											<Link className={location.pathname === nav.link ? classNames(classes['active']) : ''} to={nav.link}>{nav.title}</Link>
										</li>
									))}

								</ul>
							</aside>
						</div>

						<div>
							{asideData.map((item) => (
								type === item.type ? item.nameComp : ''
							))}
						</div>


					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
};

export default ServicesPages;