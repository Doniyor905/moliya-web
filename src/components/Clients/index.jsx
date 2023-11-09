import classes from './Clients.module.scss';
import Container from '../../layout/Container';
import clinetsImg from '../../assets/clinets_img.png';
import clinetsImg2 from '../../assets/clinets_img2.png';
import clinetsImg3 from '../../assets/clinets_img3.png';
import clinetsImg4 from '../../assets/clinets_img4.png';

const Clients = () => {
	return (
		<div className={classes['clients']}>
			<Container>
				<div className={classes['clients__title']}>
					<h3>Нaши клиенты</h3>
					<p>Мы гордимся, что всемирно известны <br />
                        компании доверяют нам.</p>
				</div>
				<div className={classes['clients__inner']}>
					<div className={classes['clients__item']}>
						<img src={clinetsImg} alt="" />
					</div>
					<div className={classes['clients__item']}>
						<img src={clinetsImg2} alt="" />
					</div>
					<div className={classes['clients__item']}>
						<img src={clinetsImg3} alt="" />
					</div>
					<div className={classes['clients__item']}>
						<img src={clinetsImg4} alt="" />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Clients;