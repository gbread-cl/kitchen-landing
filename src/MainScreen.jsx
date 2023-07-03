import './MainScreen.scss'

export const MainScreen = () => {
    return (
        <section className="first-screen">
            <div className="first-screen__dark">
                <div className="first-screen__overlay">
                    <div className="overlay-text">
                        <h1>Кухни на заказ в Ростове</h1>
                        Мы занимаемся изготовлением кухонь на заказ уже более 10 лет.
                        Среди наших работ вы сможете найт Свяжитесь с нами, чтобы узнать подробнее.
                    </div>
                    <div className="overlay-button">
                        <a href="#">Обратный звонок</a>
                    </div>
                </div>
            </div>
        </section>
    )
}