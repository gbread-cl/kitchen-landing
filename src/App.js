import './App.scss';

function App() {
    return (
        <header>
            <div className="header-wrap">
                <div className="header-logo">
                    Rostov<span>Kitchen</span>
                </div>
                <div className="menu-wrap">
                    <ul className="menu-list">

                        <li className="menu-item"><a href="#">Главная</a></li>
                        <li className="menu-item"><a href="#">Контакты</a></li>
                        <li className="menu-item"><a href="#">Портфолио</a></li>
                        <li className="menu-item"><a href="#">бал</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default App;
