import React from "react";
import "../../App.css";
import SearchIcon from "../Logos/SearchIcon";

function SearchDomain(props) {
  return (
    <div className="col-md-6 d-flex">
      <div className="hero-text">
        <h1>
          Own what <br />
          you do
        </h1>
        <div className="tld-search">
          <form action="#">
            <div className="tld-search-form">
              <span className="search-ico">
                <SearchIcon />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="pizza.cooking"
              />
              <button type="submit" className="search-btn btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="tld-link">
          <a href="#">
            Emplore
            <span>.COOKING</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchDomain;
