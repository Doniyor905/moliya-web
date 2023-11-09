import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Services.module.scss';
import servicesIcon from '../../assets/services__icon.png';
import servicesIcon2 from '../../assets/services__icon2.png';
import servicesIcon3 from '../../assets/services__icon3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import Container from '../../layout/Container';

const Services = () => {
    
	const servicesList = [
		{
			img: servicesIcon,
			title: 'Бухгалтерское сопровождение в Узбекистане',
			text: 'Бухгалтерия – важнейшее направление в нашей компании. За период многолетнего труда в сфере бухгалтерского аутсорсинга мы приобрели драгоценный опыт, сотрудничая с крупными компаниями как в Узбекистане, так и...'
		},
		{
			img: servicesIcon2,
			title: 'Изменение фирменного наименования предприятия',
			text: 'Реорганизация юридических лиц считается одной из самых сложных процедур, связанных с перерегистрацией....'
		},
		{
			img: servicesIcon3,
			title: 'Регистрация компании в Республике Узбекистан',
			text: 'Создание компании с LegalAct предполагает оперативную регистрацию различных организационно-правовых форм (ООО, ИП, СП, ЧП и тд). Процесс регистрации в среднем составляет порядка 5 рабочих дней. По необходимости полный...'
		},
		{
			img: servicesIcon3,
			title: 'Регистрация компании в Республике Узбекистан',
			text: 'Создание компании с LegalAct предполагает оперативную регистрацию различных организационно-правовых форм (ООО, ИП, СП, ЧП и тд). Процесс регистрации в среднем составляет порядка 5 рабочих дней. По необходимости полный...'
		},
		{
			img: servicesIcon3,
			title: 'Регистрация компании в Республике Узбекистан',
			text: 'Создание компании с LegalAct предполагает оперативную регистрацию различных организационно-правовых форм (ООО, ИП, СП, ЧП и тд). Процесс регистрации в среднем составляет порядка 5 рабочих дней. По необходимости полный...'
		},
		{
			img: servicesIcon3,
			title: 'Регистрация компании в Республике Узбекистан',
			text: 'Создание компании с LegalAct предполагает оперативную регистрацию различных организационно-правовых форм (ООО, ИП, СП, ЧП и тд). Процесс регистрации в среднем составляет порядка 5 рабочих дней. По необходимости полный...'
		},
		{
			img: servicesIcon3,
			title: 'Регистрация компании в Республике Узбекистан',
			text: 'Создание компании с LegalAct предполагает оперативную регистрацию различных организационно-правовых форм (ООО, ИП, СП, ЧП и тд). Процесс регистрации в среднем составляет порядка 5 рабочих дней. По необходимости полный...'
		},
		{
			img: servicesIcon3,
			title: 'Регистрация компании в Республике Узбекистан',
			text: 'Создание компании с LegalAct предполагает оперативную регистрацию различных организационно-правовых форм (ООО, ИП, СП, ЧП и тд). Процесс регистрации в среднем составляет порядка 5 рабочих дней. По необходимости полный...'
		}
	];
	return (
		<div className={styles.services}>
			<Container>
				<h3 className={styles.services__title}>Наши <br /> сервисы</h3>
			</Container>
			<div className={styles.services__inner}>
				<Swiper
                
					slidesPerView={4}
					centeredSlides={true}
					spaceBetween={30}
					grabCursor={true}
					loop={true}
					navigation={true}
					modules={[Navigation]}
					className="mySwiper"
					breakpoints={{
						// when window width is >= 320px
						320: {
							slidesPerView: 1,
							spaceBetween: 0
						},
						702: {
							slidesPerView: 2,
							spaceBetween: 0
						},
						// when window width is >= 480px
						1069: {
							slidesPerView:3,
							spaceBetween: 0
						},
						// when window width is >= 640px
						1412: {
							slidesPerView: 4,
							spaceBetween: 30
						},
						1600: {
							slidesPerView: 4,
							spaceBetween: 30
						}
					}}
				>
					{servicesList.map((name, i) => (
						<SwiperSlide key={i}>
							<div className={styles.services__item}>
								<img src={name.img} alt="" />
								<h3>{name.title}</h3>
								<p>{name.text}</p>
								<a href="#!">Подробнее</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

			</div>
		</div>
	);
};

export default Services;