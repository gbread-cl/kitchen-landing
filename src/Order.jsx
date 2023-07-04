import "./Order.scss"

export const Order = () => {
    return (
        <section>
            <h2 className="order-h2">Как сделать заказ</h2>
            <div className="order-wrap">
                <ol>
                    <li>
                        <p><span>Свяжитесь с нами</span><br/> Позвоните нам или отправьте запрос через нашу веб-форму, чтобы обсудить
                            ваши потребности и желания относительно кухни на заказ. Наша команда экспертов с
                            удовольствием поможет вам начать процесс.</p>
                    </li>
                    <li>
                        <p><span>Выезд замерщика</span><br/> После обсуждения деталей заказа, мы организуем выезд опытного замерщика.
                            Он произведет точные измерения вашей кухни, учитывая особенности помещения и ваше
                            индивидуальное видение проекта.</p>
                    </li>
                    <li>
                        <p><span>Изготовление и согласование дизайна</span><br/> Наша команда дизайнеров разработает проект вашей кухни
                            на заказ, учитывая ваши пожелания и потребности. Мы предоставим вам визуализации и чертежи,
                            чтобы вы могли представить, как будет выглядеть ваша будущая кухня. После согласования
                            дизайна, мы приступим к изготовлению кухни.</p>
                    </li>
                    <li>
                        <p><span>Сборка и монтаж</span><br/> Как только ваша кухня будет изготовлена, наша команда профессиональных
                            монтажников возьмет на себя сборку и установку всех элементов. Мы гарантируем высокое
                            качество и внимание к деталям, чтобы ваша кухня выглядела и функционировала идеально.</p>
                    </li>
                </ol>
            </div>
        </section>
    )
}