import classes from './Footer.module.scss';
import Container from '../../layout/Container';
import footerImg from '../../assets/footer-img.png';

const Footer = ({setModal}) => {
	return (
		<div className={classes['footer']}>
			<Container>
				<div className={classes['footer__inner']}>
					<div className={classes['footer__logo']}>
						<img src={footerImg} alt="" />
						<button onClick={() => setModal(true)}>Разместить заказ</button>
					</div>
					<div className={classes['footer__nav']}>
						<ul>
							<li>Biz haqimizda</li>
							<li>Xizmatlar</li>
							<li>Blog</li>
							<li>Yangiliklar</li>
							<li>Aloqa</li>
						</ul>
					</div>
					<div className={classes['footer__phone']}>
						<a href="#!">+998 99 999 99 99</a>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Footer;