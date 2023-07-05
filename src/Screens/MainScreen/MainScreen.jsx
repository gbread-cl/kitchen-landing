import './MainScreen.scss'

export const MainScreen = () => {
    return (
        <section className="first-screen">
            <div className="first-screen__dark">
                <div className="first-screen__overlay">
                    <div className="overlay-text">
                        <h1>Кухни на заказ в Ростове</h1>
                        Мы занимаемся изготовлением кухонь на заказ уже более 10 лет.
                        Среди наших работ вы сможете найти кухни в стилях минимализм, модерн, скандинавский,
                        неоклассика. Свяжитесь с нами, чтобы узнать подробнее.
                    </div>
                    <div className="overlay-button">
                        <a href="https://wa.me/79185456703">Оставить заявку</a>
                    </div>
                </div>
            </div>
        </section>
    )
}