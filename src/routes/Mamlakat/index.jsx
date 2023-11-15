import React from 'react';

const Mamlakat = () => {
	return (
		<>
			<div className='services__content'>
				<h2 className='services__content-title'>Mamlakat ichida va tashqirida logistika xizmati</h2>
				{/* <p className='services__content-text'>
                    Biz o'z mijozlarimiz va hamkorlarimizni qadrlaymiz va yuk tashish bilan bog'liq har qanday masalalarda
                    yordam berishga, ushbu sohada malakali maslahatlar berishga va yuk tashish uchun yanada
                    qulay shartlarni taklif qilishga tayyormiz.
				</p> */}

				<div className='services__content-service'>
					<ul>
						<li>Yo'lovchilar va yuklarni tashish;</li>
						<li>Yuklash va tushirish operatsiyalari;</li>
						<li>Yuk mashinasini tayyorlash;</li>
						<li>Ijara yoki ijara asosida yuk mashinasini taqdim etish;</li>
						<li>Tashkilotimizning asosiy transport xizmati bu, albatta, yuk tashishdir. Qoida tariqasida,
                            ushbu xizmat boshqa xizmatlar bilan birga keladi, masalan: yuklash, tushirish, jo'natish va hk.</li>
						<li>Bizning jamoamiz sizga qo'shimcha transport xizmatlarini taklif qilishdan mamnun: korporativ mijozlarni tashish,
                            tadbirlar uchun transport xizmatlari</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Mamlakat;