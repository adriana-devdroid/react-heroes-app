import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import useForm from "../../hooks/useForm";
import HeroCard from "../heroes/HeroCard";
import getHeroByName from "../../selectors/getHeroByName";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  
  const {q=''} = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchValue: "",
  });

  const { searchValue } = formValues;
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchValue}`);
  };

  const heroesFiltered = useMemo(() => 
      getHeroByName(q),
      [q]);

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4> Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              onChange={handleInputChange}
              value={searchValue}
              type="text"
              name="searchValue"
              autoComplete="off"
              placeholder="Find a hero..."
              className="form-control"
            />
            <button className="btn btn-danger mt-4" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4> Results </h4>
          <hr />
          {
              (q==='') &&
              <div className='alert alert-info'>
                  Busca un heroe </div>
          }
          {
              (q !=='' && heroesFiltered.length ===0) &&
              <div className='alert alert-danger'>
                  No hay resultados para {q} </div>
          }
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
