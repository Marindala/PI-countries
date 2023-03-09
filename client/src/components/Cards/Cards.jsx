import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries, getActivities, getByName } from "../../redux/actions";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import style from "./cards.module.css";
import Paginated from "../Paginated/Paginated";

import SearchBar from "../SearchBar/SearchBar";

export default function Cards() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);
  //console.log(allActivities);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPages] = useState(9);
  const indexOfLastItem = currentPage * itemsPerPages;
  const indexOfFirstItem = indexOfLastItem - itemsPerPages;
  const currentCountries = allCountries.slice(indexOfFirstItem, indexOfLastItem);

  
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
   
  }, [dispatch]);




  return (
    <div className={style.allCards}>
        <ul>
        <SearchBar
        allActivities={allActivities}
        setCurrentPage={setCurrentPage}
        allCountries={allCountries}
        itemsPerPages={itemsPerPages}
      
        currentPage={currentPage}
          
         /> 
       
        
        
        </ul>
     
       <div className={style.pagi}>
      <ul>
      <Paginated
              allCountries={allCountries}
              itemsPerPages={itemsPerPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              allActivities={allActivities}
             
            />
            </ul>
            </div>
          
      
      {currentCountries?.map((country) => {
        return (
         
         
          <Fragment key={country.id}>
        
            <Link to={"/country/" + country.id}>
              <div className={style.puedoCar}>
              <Card
                image={country.image}
                name={country.name}
                continents={country.continents}
                population={country.population}
              />
              </div>
            </Link>
          </Fragment>
        );
      })}
     
      
    </div>
  );
}
