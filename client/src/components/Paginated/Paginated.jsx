import React, { useState } from "react";
import style from "./paginated.module.css";
import image from "../../assets/BOTONI.png";
import image2 from "../../assets/BOTOND.png"

export default function Paginated({allCountries, itemsPerPages, setCurrentPage, currentPage}) {
  
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 0; i < Math.ceil(allCountries.length / itemsPerPages); i++) {
    pages.push(i + 1);
  }

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
    window.scrollTo(0, 0); 
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>; 
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const renderPageNumbers =  pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={(e) => handleClick(e)}
          className={currentPage === number ? style.active : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div>
      <ul className={style.pageNumbers}>
        <li  className={style.buttPaginated}  >
          <button  className={style.buttPaginated} >
           
            <img src={image} height ="80" width="80"  disabled={currentPage === pages[0] ? true : false}
            onClick={handlePrevbtn}/>
            
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li  className={style.buttPaginated}>
          <button className={style.buttPaginated}>
           
            <img src={image2} height ="80" width="80"  disabled={currentPage === pages[pages.length - 1] ? true : false}
            onClick={handleNextbtn}/>
          
          
          </button>
        </li>
      </ul>
    </div>
  );
}
