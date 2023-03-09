import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  getCountries,
  orderByName,
  orderByPopulation,
  filterByContinent,
  filterByActivity,
  getActivities,
} from "../../redux/actions";
import style from "./home.module.css";
import Loading from "../../components/Loading/Loading";
//import Paginated from "../../components/Paginated/Paginated";
import Filter from "../../components/Filter/Filter";

export default function Home() {
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
  console.log(currentPage)
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

 


  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  function handleSort(e) {
    dispatch(orderByName(e.target.value));
    setOrder(`ordenado ${e.target.value}`);
    
  }

  function handleOrderByPopulation(e) {
    dispatch(orderByPopulation(e.target.value));
    setOrder(`ordenado ${e.target.value}`);
  }

  function handleContinents(e) {
    dispatch(filterByContinent(e.target.value));
    setCurrentPage(1);
  }

  function handleActivity(e) {
    console.log(e.target.value);
    dispatch(filterByActivity(e.target.value));
    setCurrentPage(1);
  }

  

  return (
    <div className={style.containerHome}>
      <div>
    
           
    
    
       
    
      </div>
      <NavBar /> 
     {/*  <SearchBar/> */}
      <Filter 
      handleSort={handleSort}
      handleOrderByPopulation={handleOrderByPopulation}
      handleContinents={handleContinents}
      handleActivity={handleActivity}
      allActivities={allActivities}
      allCountries={allCountries}
       />

    
    
    
     
     
      
      {allCountries.length ? (
        <div>
     
      
     
          
        
       
        


          <div>
            <Cards currentCountries={currentCountries} />
      
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
