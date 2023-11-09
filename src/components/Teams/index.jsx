import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import './Teams.scss';
import teamsImg from '../../assets/teams-img.png';
import Container from '../../layout/Container';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Teams = () => {
	const [tabs, setTabs] = React.useState(1);

	const updateTabs = (id) => {
		setTabs(id);
	};

	const [counterOn, setCounterOn] = React.useState(false);

	return (
		<div className="teams">
			<Container>
				<div className="teams__title">
					<h2>Наша команда</h2>
					<p>Познакомтесь с людьми, которые будут делать ваш проект</p>
				</div>
				<ul className="teams__nav">
					<li className={tabs === 1 ? 'active' : ''} onClick={() => updateTabs(1)}>Главный бухгалтер</li>
					<li className={tabs === 2 ? 'active' : ''} onClick={() => updateTabs(2)}>Главный бухгалтер</li>
					<li className={tabs === 3 ? 'active' : ''} onClick={() => updateTabs(3)}>Главный бухгалтер</li>
					<li className={tabs === 4 ? 'active' : ''} onClick={() => updateTabs(4)}>Главный бухгалтер</li>
				</ul>
				<div className="teams__inner">
					<div className={tabs === 1 ? 'teams__item active' : 'teams__item'}>
						<img src={teamsImg} alt="" />
						<div className="teams__right">
							<div className="teams__right-names">
								<div className="teams__right-title">
									Lorem Ipsum1
								</div>
								<div className="teams__right-subtitle">
									Lorem Ipsum is simply dummy text of
								</div>
								<div className="teams__right-text">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been  the industrys standard dummy text ever since
									dummy text of the printing and typesetting industry.
								</div>
							</div>
							<div className="teams__right-skills">
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={8} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={500} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={3500} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={20} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
							</div>
						</div>
					</div>
					<div className={tabs === 2 ? 'teams__item active' : 'teams__item'}>
						<img src={teamsImg} alt="" />
						<div className="teams__right">
							<div className="teams__right-names">
								<div className="teams__right-title">
									Lorem Ipsum2
								</div>
								<div className="teams__right-subtitle">
									Lorem Ipsum is simply dummy text of
								</div>
								<div className="teams__right-text">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been  the industrys standard dummy text ever since
									dummy text of the printing and typesetting industry.
								</div>
							</div>
							<div className="teams__right-skills">
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={8} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={500} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={3500} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={20} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
							</div>
						</div>
					</div>
					<div className={tabs === 3 ? 'teams__item active' : 'teams__item'}>
						<img src={teamsImg} alt="" />
						<div className="teams__right">
							<div className="teams__right-names">
								<div className="teams__right-title">
									Lorem Ipsum3
								</div>
								<div className="teams__right-subtitle">
									Lorem Ipsum is simply dummy text of
								</div>
								<div className="teams__right-text">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been  the industrys standard dummy text ever since
									dummy text of the printing and typesetting industry.
								</div>
							</div>
							<div className="teams__right-skills">
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={8} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={500} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={3500} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={20} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
							</div>
						</div>
					</div>
					<div className={tabs === 4 ? 'teams__item active' : 'teams__item'}>
						<img src={teamsImg} alt="" />
						<div className="teams__right">
							<div className="teams__right-names">
								<div className="teams__right-title">
									Lorem Ipsum4
								</div>
								<div className="teams__right-subtitle">
									Lorem Ipsum is simply dummy text of
								</div>
								<div className="teams__right-text">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been  the industrys standard dummy text ever since
									dummy text of the printing and typesetting industry.
								</div>
							</div>
							<div className="teams__right-skills">
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={8} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={500} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={3500} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
								<div>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={20} />}
											+
										</span>
									</ScrollTrigger>
									Опыт работы
								</div>
							</div>
						</div>
					</div>

				</div>

				<div className="teamsSlider">
					<Swiper

						slidesPerView={1}
						centeredSlides={true}
						spaceBetween={30}
						grabCursor={true}
						loop={true}
						navigation={true}
						modules={[Navigation]}
						className="mySwiper"

					>
						<SwiperSlide>
							<div className="teams__slider">
								<img src={teamsImg} alt="" />
								<div className="teams__slider-items">
									<div className="teams__slider-names">
										<div className="teams__slider-title">
											Lorem Ipsum1
										</div>
										<div className="teams__slider-subtitle">
											Lorem Ipsum is simply dummy text of
										</div>
										<div className="teams__slider-text">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been  the industrys standard dummy text ever since
											dummy text of the printing and typesetting industry.
										</div>
									</div>
									<div className="teams__slider-skills">
										<div>
											<span>8+</span>
											Опыт работы
										</div>
										<div>
											<span>500+</span>
											Опыт работы
										</div>
										<div>
											<span>3500+</span>
											Опыт работы
										</div>
										<div>
											<span>20+</span>
											Опыт работы
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="teams__slider">
								<img src={teamsImg} alt="" />
								<div className="teams__slider-items">
									<div className="teams__slider-names">
										<div className="teams__slider-title">
											Lorem Ipsum1
										</div>
										<div className="teams__slider-subtitle">
											Lorem Ipsum is simply dummy text of
										</div>
										<div className="teams__slider-text">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been  the industrys standard dummy text ever since
											dummy text of the printing and typesetting industry.
										</div>
									</div>
									<div className="teams__slider-skills">
										<div>
											<span>8+</span>
											Опыт работы
										</div>
										<div>
											<span>500+</span>
											Опыт работы
										</div>
										<div>
											<span>3500+</span>
											Опыт работы
										</div>
										<div>
											<span>20+</span>
											Опыт работы
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="teams__slider">
								<img src={teamsImg} alt="" />
								<div className="teams__slider-items">
									<div className="teams__slider-names">
										<div className="teams__slider-title">
											Lorem Ipsum1
										</div>
										<div className="teams__slider-subtitle">
											Lorem Ipsum is simply dummy text of
										</div>
										<div className="teams__slider-text">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been  the industrys standard dummy text ever since
											dummy text of the printing and typesetting industry.
										</div>
									</div>
									<div className="teams__slider-skills">
										<div>
											<span>8+</span>
											Опыт работы
										</div>
										<div>
											<span>500+</span>
											Опыт работы
										</div>
										<div>
											<span>3500+</span>
											Опыт работы
										</div>
										<div>
											<span>20+</span>
											Опыт работы
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="teams__slider">
								<img src={teamsImg} alt="" />
								<div className="teams__slider-items">
									<div className="teams__slider-names">
										<div className="teams__slider-title">
											Lorem Ipsum1
										</div>
										<div className="teams__slider-subtitle">
											Lorem Ipsum is simply dummy text of
										</div>
										<div className="teams__slider-text">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been  the industrys standard dummy text ever since
											dummy text of the printing and typesetting industry.
										</div>
									</div>
									<div className="teams__slider-skills">
										<div>
											<span>8+</span>
											Опыт работы
										</div>
										<div>
											<span>500+</span>
											Опыт работы
										</div>
										<div>
											<span>3500+</span>
											Опыт работы
										</div>
										<div>
											<span>20+</span>
											Опыт работы
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>

					</Swiper>
				</div>
			</Container>
		</div>
	);
};

export default Teams;