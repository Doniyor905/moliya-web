import React from 'react';
import  './Buxgalteriya.scss';

const Buxgalteriya = () => {
	return (
		<>
			<div className='services__content'>
				<h2 className='services__content-title'>Buxgalteriya xizmati</h2>
				<p className='services__content-text'>
					Buxgalteriya – kompaniyamizning asosiy yo'nalishlaridan biri hisoblanadi. Ko'p yillik
					faoliyatimiz davomida biz nafaqat O'zbekiston Respublikasi balki uning tashqarisidagi
					yirik kompaniyalar bilan hamkorlik qilib, buning natijasida bebaho tajribaga ega bo'lib
					kelmoqdamiz. Hozirgi kunda...
				</p>

				<h3 className='services__content-subtitle'>«Buxgalteriya xizmati» xizmat turiga nimalar kiradi:</h3>

				<div className='services__content-service'>
					<ul>
						<li>Buxgalteriya hisobini yuritish</li>
						<li>Buxgalteriya hisobini tiklash</li>
						<li>Moliyaviy hisob xalqaro standartlari (IFRS) bo'yicha hisobni yuritish, hisobot tuzish va o'girish;</li>
						<li>Boshqaruv hisobini tashkil etish va yo'lga qo'yish</li>
						<li>JBPT hisobotini shakillantirish va topshirish</li>
						<li>Yillik statistika hisobotini shakillantirish va topshirish</li>
						<li>Audit hisobotini tayyorlash va o'tkazish</li>
					</ul>
				</div>
			</div></>
	);
};

export default Buxgalteriya;