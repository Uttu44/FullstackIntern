import "../index.css";
import React from "react";
import "firebase/firestore";


export default function Photoes(props) {
  return (
    <div className="phoCON">
        <header className="PhotHead">{props.Name}</header>
          <div className="photoesCon">
            <div className="photoe">
                <img className="Img" src={props.Url} alt="img"></img>
            </div>
          </div>
    </div>
  )
}
