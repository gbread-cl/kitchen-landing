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
                                <div onClick={() => props.setThumb(el)}>
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
                        <div className="single-item-description">
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