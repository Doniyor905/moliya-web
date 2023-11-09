import Container from '../../layout/Container';
import classes from './Testimonials.module.scss';
import testimonialsImg from '../../assets/testimonials_img.png';
import testimonialsImg2 from '../../assets/testimonials_img2.png';
import testimonialsImg3 from '../../assets/testimonials_img3.png';
import testimonialsImg4 from '../../assets/testimonials_img4.png';
import bg from '../../assets/bg.png';

const Testimonials = () => {
	return (
		<>
			<Container>
				<div className={classes['testimonials']}>
					<div className={classes['testimonials__inner']}>
						<div className={classes['testimonials__left']}>
							<div className={classes['testimonials__left-item']}>
								<img src={testimonialsImg} alt="" />
								<h3>Безопасность</h3>
								<p>Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been  the industrys
                standard dummy text ever since </p>
								<div className={classes['testimonials__left-number']}>
                01
								</div>
							</div>
							<div className={classes['testimonials__left-item']}>
								<img src={testimonialsImg2} alt="" />
								<h3>Профессионализм</h3>
								<p>Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been  the industrys
                standard dummy text ever since </p>
								<div className={classes['testimonials__left-number']}>
                02
								</div>
							</div>
							<div className={classes['testimonials__left-item']}>
								<img src={testimonialsImg3} alt="" />
								<h3>Высочайшее качество</h3>
								<p>Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been  the industrys
                standard dummy text ever since </p>
								<div className={classes['testimonials__left-number']}>
                03
								</div>
							</div>
							<div className={classes['testimonials__left-item']}>
								<img src={testimonialsImg4} alt="" />
								<h3>У нас работают только
                специалисты</h3>
								<p>Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been  the industrys
                standard dummy text ever since </p>
								<div className={classes['testimonials__left-number']}>
                04
								</div>
							</div>
						</div>
						<div className={classes['testimonials__right']}>
							<div className={classes['testimonials__right-title']}>
              Наши сильные <br /> стороны
							</div>
							<p className={classes['testimonials__right-subtitle']}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
							</p>
							<form>
								<div className={classes['testimonials__form']}>
									<h3 className={classes['testimonials__form-title']}>
                  Telefon raqamni qoldiring
									</h3>
									<input className={classes['testimonials__form-name']} placeholder='Ism' type="text" />
									<input className={classes['testimonials__form-phone']} placeholder='Telefon raqam' type="text" />
									<button className={classes['testimonials__form-button']}>Jo’natish</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Container>
			<img className={classes['testimonials__img']} src={bg} alt="" />
		</>
	);
};

export default Testimonials;