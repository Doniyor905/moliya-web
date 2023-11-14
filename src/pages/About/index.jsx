import React from 'react';
import Container from '../../layout/Container';
import HeaderMenu from '../../components/HeaderMenu';
import Footer from '../../components/Footer';

import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';

import countIcon from '../../assets/about-count.png';
import countIcon2 from '../../assets/about-count-2.png';
import countIcon3 from '../../assets/about-count-3.png';
import countIcon4 from '../../assets/about-count-4.png';
import countIcon5 from '../../assets/about-count-5.png';
import girl from '../../assets/about-girl.png';
import aboutTeam from '../../assets/about-team.png';

import classes from './About.module.scss';

const About = () => {

	const [counterOn, setCounterOn] = React.useState(false);
	return (
		<>
			<HeaderMenu />
			<div className={classes['about']}>
				<div className={classes['about__banner']}>
					<Container>
						<div className={classes['about__banner-wrapper']}>
							<div className={classes['about__banner-texts']}>
								<h2 className={classes['about__title']}>BIZ HAQIMIZDA</h2>
								<p className={classes['about__text']}>
									Guruhimizning asosiy maqsadlari - ijobiy natijaga erishish, xizmat
									ko'rsatishning sifat jihatidan yuqori darajasi va mijozning umidlari
									ustuvorligi va ulardan oshib ketish istagi
								</p>
							</div>
							<div className={classes['about__banner-img']}>
								<img src={girl} alt="" />
							</div>
						</div>

					</Container>
				</div>
				<div className={classes['about__content']}>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen
						book. It has survived not only five centuries, but also the leap into electronic typesetting,
					<br /><br />
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like Aldus PageMaker
						including versions of Lorem Ipsum.</p>
				</div>

				<Container>
					<h2 className={classes['about__inner-title']}>
						<span>NIMA UCHUN</span> <br />
						BIZ TANLANGANMIZ
					</h2>
					<div className={classes['about__inner']}>

						<div className={classes['about__item']}>
							<h3 className={classes['about__item-title']}>
								Biznesni tashkil etishda tajriba
							</h3>
							<div className={classes['about__item-text']}>
								with the release of Letraset sheets containing
								Lorem Ipsum passages, and more recently with
								desktop publishing software like Aldus PageMaker
								including versions of Lorem Ipsum.
							</div>
						</div>

						<div className={classes['about__item']}>
							<h3 className={classes['about__item-title']}>
								Biznesni tashkil etishda tajriba
							</h3>
							<div className={classes['about__item-text']}>
								with the release of Letraset sheets containing
								Lorem Ipsum passages, and more recently with
								desktop publishing software like Aldus PageMaker
								including versions of Lorem Ipsum.
							</div>
						</div>

						<div className={classes['about__item']}>
							<h3 className={classes['about__item-title']}>
								Biznesni tashkil etishda tajriba
							</h3>
							<div className={classes['about__item-text']}>
								with the release of Letraset sheets containing
								Lorem Ipsum passages, and more recently with
								desktop publishing software like Aldus PageMaker
								including versions of Lorem Ipsum.
							</div>
						</div>

						<div className={classes['about__item']}>
							<h3 className={classes['about__item-title']}>
								Biznesni tashkil etishda tajriba
							</h3>
							<div className={classes['about__item-text']}>
								with the release of Letraset sheets containing
								Lorem Ipsum passages, and more recently with
								desktop publishing software like Aldus PageMaker
								including versions of Lorem Ipsum.
							</div>
						</div>
					</div>

					<div className={classes['about__counter']}>
						<div className={classes['about__counter-block']}>
							<div className={classes['about__counter-icon']}>
								<img src={countIcon} alt="" />
							</div>

							<div className={classes['about__counter-texts']}>
								<div className={classes['about__counter-number']}>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={1000} />}
											+
										</span>
									</ScrollTrigger>

								</div>
								<p className={classes['abut__counter-text']}>Mijozlar soni</p>
							</div>
						</div>

						<div className={classes['about__counter-block']}>
							<div className={classes['about__counter-icon']}>
								<img src={countIcon2} alt="" />
							</div>
							<div className={classes['about__counter-texts']}>
								<div className={classes['about__counter-number']}>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={1000} />}
											+
										</span>
									</ScrollTrigger>

								</div>
								<p className={classes['abut__counter-text']}>Mijozlar soni</p>
							</div>
						</div>

						<div className={classes['about__counter-block']}>
							<div className={classes['about__counter-icon']}>
								<img src={countIcon3} alt="" />
							</div>
							<div className={classes['about__counter-texts']}>
								<div className={classes['about__counter-number']}>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={1000} />}
											+
										</span>
									</ScrollTrigger>

								</div>
								<p className={classes['abut__counter-text']}>Mijozlar soni</p>
							</div>
						</div>

						<div className={classes['about__counter-block']}>
							<div className={classes['about__counter-icon']}>
								<img src={countIcon4} alt="" />
							</div>
							<div className={classes['about__counter-texts']}>
								<div className={classes['about__counter-number']}>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={1000} />}
											+
										</span>
									</ScrollTrigger>

								</div>
								<p className={classes['abut__counter-text']}>Mijozlar soni</p>
							</div>
						</div>

						<div className={classes['about__counter-block']}>
							<div className={classes['about__counter-icon']}>
								<img src={countIcon5} alt="" />
							</div>
							<div className={classes['about__counter-texts']}>
								<div className={classes['about__counter-number']}>
									<ScrollTrigger onEnter={() => setCounterOn(true)}>
										<span>
											{counterOn && <CountUp duration={10} end={1000} />}
											+
										</span>
									</ScrollTrigger>

								</div>
								<p className={classes['abut__counter-text']}>Mijozlar soni</p>
							</div>
						</div>
					</div>

					<div className={classes['about__team']}>
						<h2 className={classes['about__team-title']}>
							Shaxsiy jamoa
						</h2>

						<div className={classes['about__team-inner']}>
							<div className={classes['about__team-item']}>
								<img src={aboutTeam} alt="" />
								<h3 className={classes['about__team-name']}>Yusupov Doniyor</h3>
								<p className={classes['about__team-job']}>
									Matrerial hisobchi
								</p>
							</div>
							<div className={classes['about__team-item']}>
								<img src={aboutTeam} alt="" />
								<h3 className={classes['about__team-name']}>Yusupov Doniyor</h3>
								<p className={classes['about__team-job']}>
									Matrerial hisobchi
								</p>
							</div>
							<div className={classes['about__team-item']}>
								<img src={aboutTeam} alt="" />
								<h3 className={classes['about__team-name']}>Yusupov Doniyor</h3>
								<p className={classes['about__team-job']}>
									Matrerial hisobchi
								</p>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<Footer />

		</>
	);
};

export default About;