import Container from '../../layout/Container';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';


const Modal = ({modal, setModal}) => {
	return (
		<Container>
			<div className={modal === true ? classNames(styles['modal'], styles['active']) : styles['modal']}>
				<div className={styles['modal__inner']}>
					<FontAwesomeIcon onClick={() => setModal(false)} className={styles['modal__close']} icon={faXmark} />
					<div className={styles['modal__title']}>
						<h2>Заполните форму</h2>
						<p>и мы свяжемся с вами</p>
					</div>
					<form className={styles['modal__item']}>
						<input type="text" placeholder='Имя' />
						<input type="text" placeholder='Телефон номер' />
						<button>Отправить</button>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default Modal;