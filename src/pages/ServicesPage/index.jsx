import { Link, Route, Routes, useParams } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu';
import Container from '../../layout/Container';
import classes from './ServicesPage.module.scss';
import Buxgalteriya from '../../routes/Buxgalteriya';
import Yurudik from '../../routes/Yurudik';
import classNames from 'classnames';
import React from 'react';
import Dekloratsiya from '../../routes/Dekloratsiya';
import Moliya from '../../routes/Moliya';
import Hr from '../../routes/Hr';
import DavlarHaridlar from '../../routes/DavlatHaridlar';
import Matbaa from '../../routes/Matbaa';
import Mamlakat from '../../routes/Mamlakat';
const ServicesPages = () => {
	const { type } = useParams();
	const [accordion, setAccordion] = React.useState(false);

	const toggleAccordion = () => {
		setAccordion(!accordion);
	};
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
									<li onClick={() => toggleAccordion(false)} className={classes['services__aside-link']}>
										<Link className={type === 'buxgalteriya' ? classNames(classes['active']) : ''} to="/services/buxgalteriya">Buxgalteriya xizmati</Link>
									</li>
									<li onClick={() => toggleAccordion(false)} className={classes['services__aside-link']}>
										<Link className={type === 'yuridik' ? classNames(classes['active']) : ''} to="/services/yuridik">Yuridik xizmatlar</Link>
									</li>
									<li onClick={() => toggleAccordion(false)} className={classes['services__aside-link']}>
										<Link className={type === 'moliya' ? classNames(classes['active']) : ''} to="/services/moliya">Moliyaviy va iqtisodiy yordam</Link>
									</li>
									<li onClick={() => toggleAccordion(false)} className={classes['services__aside-link']}>
										<Link className={type === 'dekloratsiya' ? classNames(classes['active']) : ''} to="/services/dekloratsiya">Tovarlarning elektron deklaratsiyasi</Link>
									</li>
									<li onClick={() => toggleAccordion(false)} className={classes['services__aside-link']}>
										<Link className={type === 'hr' ? classNames(classes['active']) : ''} to="/services/hr">HR xizmatlar</Link>
									</li>
									<li onClick={() => toggleAccordion(false)} className={classes['services__aside-link']}>
										<Link className={type === 'davlat-xaridlari-boyicha-vositachilik-xizmatlari' ? classNames(classes['active']) : ''} to="/services/davlat-xaridlari-boyicha-vositachilik-xizmatlari">Davlat xaridlari bo'yicha vositachilik
											xizmatlari</Link>
									</li>
									<li onClick={() => toggleAccordion(false)} className={classes['services__aside-link']}>
										<Link className={type === 'bosib-chiqarish' ? classNames(classes['active']) : ''} to="/services/bosib-chiqarish">Bosib chiqarish, tarqatish, reklama va
											suvenir mahsulotlarini ishlab chiqarish bo'yicha xizmatlar</Link>
									</li>
									<li onClick={() => toggleAccordion(false)} className={classes['services__aside-link']}>
										<Link className={type === 'matbaa' ? classNames(classes['active']) : ''} to="/services/matbaa">Matbaa (poligrafiya) xizmatlari</Link>
									</li>
									<li onClick={() => toggleAccordion(false)} className={classes['services__aside-link']}>
										<Link className={type === 'mamlakat' ? classNames(classes['active']) : ''} to="/services/mamlakat">Mamlakat ichida ham, chet elda ham
											logistika xizmati</Link>
									</li>
									<li onClick={() => toggleAccordion(false)} className={classes['services__aside-link']}>
										<Link className={type === 'litsenziyalar' ? classNames(classes['active']) : ''} to="/services/litsenziyalar">Litsenziyalar va sertifikatlar olishda
											yordam berish</Link>
									</li>

								</ul>
							</aside>
						</div>

						<div>
							{type === 'buxgalteriya' ? <Buxgalteriya /> : ''}
							{type === 'yuridik' ? <Yurudik /> : ''}
							{type === 'moliya' ? <Moliya /> : ''}
							{type === 'dekloratsiya' ? <Dekloratsiya /> : ''}
							{type === 'hr' ? <Hr /> : ''}
							{type === 'davlat-xaridlari-boyicha-vositachilik-xizmatlari' ? <DavlarHaridlar /> : ''}
							{type === 'matbaa' ? <Matbaa /> : ''}
							{type === 'mamlakat' ? <Mamlakat /> : ''}
							{type === 'bosib-chiqarish' ? 'Yoq' : ''}
							{type === 'litsenziyalar' ? 'Yoq' : ''}
						</div>

						{/* <Route path="/services/:type">
							<div className={classes['services__content']}>
								<h2 className={classes['services__content-title']}>Buxgalteriya xizmati</h2>
								<p className={classes['services__content-text']}>
									Buxgalteriya – kompaniyamizning asosiy yo'nalishlaridan biri hisoblanadi. Ko'p yillik
									faoliyatimiz davomida biz nafaqat O'zbekiston Respublikasi balki uning tashqarisidagi
									yirik kompaniyalar bilan hamkorlik qilib, buning natijasida bebaho tajribaga ega bo'lib
									kelmoqdamiz. Hozirgi kunda...
								</p>

								<h3 className={classes['services__content-subtitle']}>«Buxgalteriya xizmati» xizmat turiga nimalar kiradi:</h3>

								<div className={classes['services__content-service']}>
									<ul>
										<li>Buxgalteriya hisobini yuritish</li>
										<li>Buxgalteriya hisobini tiklash</li>
										<li>Moliyaviy hisob xalqaro standartlari (IFRS) bo'yicha hisobni yuritish, hisobot tuzish va o'girish;</li>
										<li>Boshqaruv hisobini tashkil etish va yo'lga qo'yish</li>
										<li>JBPT hisobotini shakillantirish va topshirish</li>
										<li>Yillik statistika hisobotini shakillantirish va topshirish</li>
										<li>Audit hisobotini tayyorlash va o'tkazish</li>
									</ul>
								</div>
							</div></Route> */}
					</div>
				</div>
			</Container>
		</>
	);
};

export default ServicesPages;