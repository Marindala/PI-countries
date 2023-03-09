import React from "react";
import style from "./filter.module.css";

export default function Filter({//paso por props los manejadores y todas las actividades,
  handleActivity,
  handleContinents,
  handleSort,
  handleOrderByPopulation,
  allActivities,
}) {
  return (
    <div className={style.container}>
      <div className={style.sel}>
        <select onChange={(e) => handleSort(e)}>
          <option defaultValue>ORDER BY NAME</option>
          <option value={"asc"}>NAME BY A-Z </option>
          <option value={"des"}>NAME BY Z-A </option>
        </select>

        <select onChange={(e) => handleOrderByPopulation(e)}>
          <option defaultValue> ORDER BY POPULATION </option>
          <option value="more">MORE POPULATED</option>
          <option value="less">LESS POPULATED</option>
        </select>

        <select onChange={handleContinents}>
          <option value="All">ALL COUNTRIES</option>
          <option value="North America">NORTH AMERICA</option>
          <option value="South America">SOUTH AMERICA</option>
          <option value="Africa">AFRICA</option>
          <option value="Europe">EUROPE</option>
          <option value="Asia">ASIA</option>
          <option value="Oceania">OCEANIA</option>
          <option value="Antarctica">ANTARCTICA</option>
        </select>

        <select onChange={(e) => handleActivity(e)}>
          <option value="All">activities</option>
          {allActivities.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
