import './Preferences.scss'


export const Preferences = () => {
    return (
        <section className="">
            <div className="container">
                <div className="preferences-list">
                    <div className="preference">
                        <div className="preference-image">
                            <img src="/icons/experience.png"/>
                        </div>
                        <div className="preference-text">
                            <h3>Большой опыт</h3>
                            Мы занимаемся изготовлением кухонь уже более 10 лет
                        </div>
                    </div>
                    <div className="preference">
                        <div className="preference-image">
                            <img src="/icons/install.png"/>
                        </div>
                        <div className="preference-text">
                            <h3>Индивидуальное проектирование</h3>
                            Изготовим кухню на любой вкус из качественных и долговечных материалов
                        </div>
                    </div>
                    <div className="preference">
                        <div className="preference-image">
                            <img src="/icons/ruler.png"/>
                        </div>
                        <div className="preference-text">
                            <h3>Бесплатный замер</h3>
                            Наш мастер бесплатно произведет замер, после чего мы рассчитаем точную стоимость
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}