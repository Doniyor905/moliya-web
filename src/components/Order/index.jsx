import React from 'react'
import classes from "./Order.module.scss"
import Container from '../../layout/Container'

const index = () => {
    return (
        <Container className={classes["order"]}>
            <div className={classes["order__item"]}>
                <h3 className={classes["order__item-title"]}>Разместите заказ сейчас</h3>
                <p className={classes["order__item-text"]}>Получите бесплатную консультацию и все, что связано с вашим бизнесом
                    чтобы получить ответы на свои вопросы.</p>
                <form className={classes["order__form"]}>
                    <input placeholder='Ваше имя' type="text" />
                    <input placeholder='Ваш номер телефона' type="text" />
                    <button>Получить совет</button>
                </form>
            </div>
        </Container>
    )
}

export default index