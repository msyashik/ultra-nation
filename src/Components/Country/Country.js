import React from "react";

const Country = (props) => {
  const { name, population, flag } = props.country;
  const countryStyle = {
    border: "1px solid red",
    margin: "10px",
    padding: "10px",
  };
  const handleAddCountry = props.handleAddCountry;
  return (
    <div style={countryStyle}>
      <h4>This is a {name}</h4>
      <img style={{ height: "50px" }} src={flag} alt="" />
      <p>Population: {population}</p>
      <button onClick={() => handleAddCountry(props.country)}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
