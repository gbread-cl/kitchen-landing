import "./SingleItem.scss"
import {useEffect, useState} from "react";

export const SingleItem = (props) => {


    return (
        <div className={props.active ? "single-item-container active" : "single-item-container"}
             onClick={() => props.setActive(false)}>
            <div className="single-item-wrap" onClick={(e) => e.stopPropagation()}>
                <div className="single-item-left">
                    <div className="single-item-thumbnail">
                        <img alt={props.item.name} src={props.thumb}/>
                    </div>
                    <div className="single-item-list">
                        {props.item.images.map((el, index) => {
                            return (
                                <div onClick={(e) => {
                                    props.setThumb(el)
                                    document.querySelectorAll('.selected')?.forEach(el => el.classList.remove('selected'))
                                    e.target.classList.add('selected')
                                }}>
                                    <img alt="kitchen-image" src={el}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="single-item-right">
                    <div className="single-item-text">
                        <div className="single-item-header">
                            <h2>
                                {props.item.name}
                            </h2>
                        </div>
                        <div className="single-item-char">
                            <h3>Характеристики</h3>
                            <ul>

                                {props.item.characteristics.map((el) => {
                                    return (
                                        <li>{el}</li>
                                    )
                                })}

                            </ul>
                        </div>
                        <div className="single-item-description">
                            <h3>Описание</h3>
                            {props.item.description}
                        </div>
                    </div>
                    <div className="single-item-button">
                        <button>Обратный звонок</button>
                    </div>
                </div>
            </div>
        </div>
    )
}