import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png';

import classes from './HeaderMenu.module.scss';
import Container from '../../layout/Container';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {

	const [openMenu, setOpenMenu] = React.useState();
	const [hoverDiv, setHoverDiv] = React.useState(false);
	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};


	return (
		<div className={classes.header__wrapper}>
			<Container>
				<header className={classes.header}>
					<Link to="/">
						<img className={classes['header__logo']} src={logo} alt="Logos" />
					</Link>

					<div className={classes['header__menu-block']}>

						<div className={classes.header__contact}>
							<a href="#!" className={classes['header__contact-prays']}>Prays list</a>
							<a href="#!" className={classNames(classes['header__contact-instagram'], classes['header__contact-social'])}>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href="#!" className={classNames(classes['header__contact-telegram'], classes['header__contact-social'])}>
								<FontAwesomeIcon icon={faTelegram} />
							</a>
							<a href="#!" className={classNames(classes['header__contact-facebook'], classes['header__contact-social'])}>
								<FontAwesomeIcon icon={faFacebook} />
							</a>
						</div>

						<div onClick={() => toggleMenu()} className={classes['header__menu']}>
							<div className={classes['header__menu-bars']}>
								<span className={openMenu === true ? classes['active'] : classes['']}></span>
							</div>
							<div className={classes['header__menu-text']}>
								Menu
							</div>
						</div>

					</div>

				</header>
			</Container>
			<div id={hoverDiv === true ? classes['header__hover'] : ''} className={openMenu === true ? classNames(classes['header__nav'], classes['active']) : classNames(classes['header__nav'])}>
				<Container>
					<h2 className={classes['header__nav-title']}>Sayt menyusi</h2>
					<div className={classes['header__nav-content']}>
						<ul className={classes['header__nav-menu']}>
							<li><Link to="/services/buxgalteriya" className={classes['header__nav-link']}>Biz haqimizda</Link></li>
							<li onMouseEnter={() => setHoverDiv(true)} onMouseLeave={() => setHoverDiv(false)}>
								<Link to="/services/buxgalteriya" className={classes['header__nav-link']}>Xizmatlar</Link>
								{<div className={hoverDiv == true ? classNames(classes['header__nav-hover'], classes['active']) : classes['header__nav-hover']}>
									<ul>
										<Link to="/services/buxgalteriya">Buxgalteriya xizmati</Link>
										<Link to="/services/yuridik">Yuridik xizmatlar</Link>
										<Link to="/services/moliya">Moliyaviy va iqtisodiy yordam</Link>
										<Link to="/services/dekloratsiya">Tovarlarning elektron deklaratsiyasi</Link>
										<Link to="/services/hr">HR xizmatlar</Link>
										<Link to="/services/davlat-xaridlari-boyicha-vositachilik-xizmatlari">Davlat xaridlari bo'yicha vositachilik
											xizmatlari</Link>
										<Link to="/services/bosib-chiqarish">Bosib chiqarish, tarqatish, reklama va
											suvenir mahsulotlarini ishlab chiqarish bo'yicha xizmatlar</Link>
										<Link to="/services/matbaa">Matbaa (poligrafiya) xizmatlari</Link>
										<Link to="/services/mamlakat">Mamlakat ichida ham, chet elda ham
											logistika xizmati</Link>
										<Link to="/services/litsenziyalar">Litsenziyalar va sertifikatlar olishda
											yordam berish</Link>
									</ul>
								</div>}
							</li>
							<li><a href="#!" className={classes['header__nav-link']}>Blog</a></li>
							<li><a href="#!" className={classes['header__nav-link']}>Yangiliklar</a></li>
							<li><a href="#!" className={classes['header__nav-link']}>Aloqa</a></li>
						</ul>
						<div className={classes['header__nav-language']}>
							<ul>
								<li>RU</li>
								<li>OZ</li>
								<li>EN</li>
							</ul>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default HeaderMenu;