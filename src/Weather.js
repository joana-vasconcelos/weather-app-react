import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="frame">
      <form className="form">
        <input
          className="form-search"
          type="search"
          placeholder="Enter a city"
        />
        <input className="form-submit" type="submit" value="Search" />
      </form>
    </div>
  );
}
