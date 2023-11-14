import React from 'react';
import Container from '../../layout/Container';
import classes from './News.module.scss';
import HeaderMenu from '../../components/HeaderMenu';
import newsImage from '../../assets/news.png';
import Footer from '../../components/Footer';

const News = () => {
	return (
		<>
			<HeaderMenu />
			<Container>
				<div className={classes['news']}>
					<h2 className={classes['news__title']}>BARCHA YANGILIKLAR</h2>

					<div className={classes['news__inner']}>
						<div className={classes['news__item']}>
							<div className={classes['news__item-img']}>
								<img src={newsImage} alt="" />
							</div>
							<h3 className={classes['news__item-title']}>
                                Lorem Ipsum is simply dummy
                                text of the printing
							</h3>
							<p className={classes['news__item-date']}>
                                14.02.2023
							</p>
							<p className={classes['news__item-text']}>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, </p>
						</div>
						<div className={classes['news__item']}>
							<div className={classes['news__item-img']}>
								<img src={newsImage} alt="" />
							</div>
							<h3 className={classes['news__item-title']}>
                                Lorem Ipsum is simply dummy
                                text of the printing
							</h3>
							<p className={classes['news__item-date']}>
                                14.02.2023
							</p>
							<p className={classes['news__item-text']}>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, </p>
						</div>
						<div className={classes['news__item']}>
							<div className={classes['news__item-img']}>
								<img src={newsImage} alt="" />
							</div>
							<h3 className={classes['news__item-title']}>
                                Lorem Ipsum is simply dummy
                                text of the printing
							</h3>
							<p className={classes['news__item-date']}>
                                14.02.2023
							</p>
							<p className={classes['news__item-text']}>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, </p>
						</div>
						<div className={classes['news__item']}>
							<div className={classes['news__item-img']}>
								<img src={newsImage} alt="" />
							</div>
							<h3 className={classes['news__item-title']}>
                                Lorem Ipsum is simply dummy
                                text of the printing
							</h3>
							<p className={classes['news__item-date']}>
                                14.02.2023
							</p>
							<p className={classes['news__item-text']}>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, </p>
						</div>
						<div className={classes['news__item']}>
							<div className={classes['news__item-img']}>
								<img src={newsImage} alt="" />
							</div>
							<h3 className={classes['news__item-title']}>
                                Lorem Ipsum is simply dummy
                                text of the printing
							</h3>
							<p className={classes['news__item-date']}>
                                14.02.2023
							</p>
							<p className={classes['news__item-text']}>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, </p>
						</div>
						<div className={classes['news__item']}>
							<div className={classes['news__item-img']}>
								<img src={newsImage} alt="" />
							</div>
							<h3 className={classes['news__item-title']}>
                                Lorem Ipsum is simply dummy
                                text of the printing
							</h3>
							<p className={classes['news__item-date']}>
                                14.02.2023
							</p>
							<p className={classes['news__item-text']}>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, </p>
						</div>
					</div>
				</div>
			</Container>

			<Footer/>
		</>
	);
};

export default News;