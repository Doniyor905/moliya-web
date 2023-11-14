import React from 'react';
import classes from './Contact.module.scss';
import Container from '../../layout/Container';
import HeaderMenu from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
	return (
		<>
			<HeaderMenu />
			<Container>
				<div className={classes['contact']}>
					<h2 className={classes['contact__title']}>
                        Aloqa
					</h2>
					<div className={classes['contact__inner']}>
						<div className={classes['contact__left']}>
							<div className={classes['contact__left-item']}>
								<div className={classes['contact__left-icon']}>
									<FontAwesomeIcon icon={faLocationDot} />
								</div>
								<div className={classes['contact__left-texts']}>
									<h3>Manzil</h3>
									<p>with the release of Letraset
                                        sheets containing
                                        Lorem Ipsum
                                        passages, and more recently</p>
								</div>
							</div>
							<div className={classes['contact__left-item']}>
								<div className={classes['contact__left-icon']}>
									<FontAwesomeIcon icon={faPhone} />
								</div>
								<div className={classes['contact__left-texts']}>
									<h3>Raqamlar</h3>
									<a href="#!">+998 99 999 99 99</a>
									<a href="#!">+998 99 999 99 99</a>
								</div>
							</div>
							<div className={classes['contact__left-item']}>
								<div className={classes['contact__left-icon']}>
									<FontAwesomeIcon icon={faEnvelope} />
								</div>
								<div className={classes['contact__left-texts']}>
									<h3>Pochta</h3>
									<a href="#!">pochat@gmail.com</a>
								</div>
							</div>
						</div>
						<div className={classes['contact__right']}>
							<form className={classes['contact__right-form']}>
								<div className={classes['contact__right-title']}>
									<h2 >
                                        Qayta aloqa
									</h2>
									<p>
                                        Quyidagi shaklni to'ldiring
									</p>
								</div>
								<input placeholder='Ism' className={classes['contact__right-input']} type="text" />
								<input placeholder='Telefon Raqam' className={classes['contact__right-input']} type="text" />
								<button>Yuborish</button>
							</form>
						</div>
					</div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.6398337483224!2d28.858151975581336!3d41.03313501789467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabad326c209fd%3A0x71724c7e62046129!2zQmHEn2PEsWxhcg!5e0!3m2!1sru!2str!4v1699973986784!5m2!1sru!2str"height="450"  referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</Container>

			<Footer/>
		</>
	);
};

export default Contact;