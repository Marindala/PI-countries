import React from "react";
import style from "./card.module.css";

export default function Card({ name, image, continents, population }) {
  return (
    <div className={style.contain}>
      <img className={style.img} src={image} alt="countries flag" width={"300px"} height={"200px"} />
      <div className={style.containText}>
        <h3>{name}</h3>
        <div className={style.text}>
          <h5>{continents}</h5>
          <div className={style.popu}>
            <p>
              Population <strong>{population}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
