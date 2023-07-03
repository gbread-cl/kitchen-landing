import "./Portfolio.scss"
import {state} from "./state";
import {useState} from "react";
import {SingleItem} from "./SingleItem";

export const Portfolio = () => {
    const [modalActive, setModalActive] = useState(false)
    const [modalIndex, setModalIndex] = useState(0)
    const [thumbnail, setThumbnail] = useState("")

    return (
        <section className="portfolio">
            <div className="portfolio-wrap">
                {state.map((el, index) => {
                    return (
                        <div className="portfolio-item">
                            <div className="portfolio-image">
                                <img src={el.images[0]} alt=""/>
                            </div>
                            <div className="portfolio-text" onClick={() => {
                                setModalActive(true)
                                setModalIndex(index)
                                setThumbnail(el.images[0])
                            }}>
                                <div className="portfolio-header">
                                    {el.name}
                                </div>
                            </div>
                        </div>
                    )
                })}
                <SingleItem active={modalActive} setActive={setModalActive} item={state[modalIndex]} thumb={thumbnail}
                            setThumb={setThumbnail}/>
            </div>
        </section>
    )
}