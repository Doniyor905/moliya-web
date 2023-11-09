import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './HeaderSlider.module.scss';
import Container from '../../layout/Container';

import headerBg from '../../assets/header-bg.png';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const HeaderSlider = ({setModal}) => {
	return (
		<div className={styles.header__slider}>
			<Container>
				<div className={styles['header__slider-inner']}>
					<Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
						<SwiperSlide>
							<div className={styles['header__slider-item']}>
								<div className={styles['header__slider-text']}>
									<h2>
										Юридическое <span>бухгалтерское и финансово-экономическое</span> <br />
										сопровождение
									</h2>
									<p>
										Сопровождение компании с момента постановки на учет как субъекта
										предпринимательства, лицензирование отдельных направлений
										в бизнесе, сертификации, разрешительные документы и более
										30 услуг консалтинга, которые делают Ваш бизнес более прибыльным
										и безопасным.
									</p>

									<a onClick={() => setModal(true)} href="#!">
										Оставить заявку
									</a>
								</div>

								<div className={styles['header__slider-img']}>
									<img src={headerBg} alt="" />
								</div>

							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles['header__slider-item']}>
								<div className={styles['header__slider-text']}>
									<h2>
										Юридическое <span>бухгалтерское и финансово-экономическое</span> <br />
										сопровождение
									</h2>
									<p>
										Сопровождение компании с момента постановки на учет как субъекта
										предпринимательства, лицензирование отдельных направлений
										в бизнесе, сертификации, разрешительные документы и более
										30 услуг консалтинга, которые делают Ваш бизнес более прибыльным
										и безопасным.
									</p>

									<a href="#!">
										Оставить заявку
									</a>
								</div>

								<div className={styles['header__slider-img']}>
									<img src={headerBg} alt="" />
								</div>

							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles['header__slider-item']}>
								<div className={styles['header__slider-text']}>
									<h2>
										Юридическое <span>бухгалтерское и финансово-экономическое</span> <br />
										сопровождение
									</h2>
									<p>
										Сопровождение компании с момента постановки на учет как субъекта
										предпринимательства, лицензирование отдельных направлений
										в бизнесе, сертификации, разрешительные документы и более
										30 услуг консалтинга, которые делают Ваш бизнес более прибыльным
										и безопасным.
									</p>

									<a href="#!">
										Оставить заявку
									</a>
								</div>

								<div className={styles['header__slider-img']}>
									<img src={headerBg} alt="" />
								</div>

							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</Container>
		</div>
	);
};

export default HeaderSlider;