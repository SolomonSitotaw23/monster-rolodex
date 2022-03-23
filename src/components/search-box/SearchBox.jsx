import React from "react";
import './Searchbox.css'
export const SearchBox = ({ placeholder, handelChange }) => {
    return(
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handelChange}
  />)
};
