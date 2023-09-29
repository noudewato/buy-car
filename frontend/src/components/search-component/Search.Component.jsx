import React, {useEffect} from "react";
import "./search.style.scss";
import AOS from "aos"
import 'aos/dist/aos.css'

const SearchComponent = () => {

   useEffect(() => {
     AOS.init({
       duration: 3000,
     });
   }, []);
  return (
    <div data-aos="fade-up" className="SearchComponent">
      <h1>Choose Your Car</h1>
      <div className="searchContent">
        <div className="inputGroup">
          <label htmlFor="">Make</label><br />
          <select name="" id="">
            <option value="">Acura</option>
            <option value="">Toyota</option>
            <option value="">Kia</option>
            <option value="">Mercedes-Benz</option>
            <option value="">Honda</option>
          </select>
        </div>
        <div className="inputGroup">
          <label htmlFor="">Model</label><br />
          <select name="" id="">
            <option value="">Any</option>
          </select>
        </div>
        <div className="inputGroup">
          <label htmlFor="">Year from</label><br />
          <select name="" id="">
            <option value="">2010</option>
            <option value="">2015</option>
            <option value="">2018</option>
            <option value="">2020</option>
            <option value="">2022</option>
          </select>
        </div>
        <div className="inputGroup">
          <label htmlFor="">Year to</label><br />
          <select name="" id="">
            <option value="">2010</option>
            <option value="">2015</option>
            <option value="">2018</option>
            <option value="">2020</option>
            <option value="">2022</option>
          </select>
        </div>
        <div className="btn-search">
          <button>Search Car</button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
