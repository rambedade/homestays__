import React, { useEffect, useState, createContext } from "react";

import housesData from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  //return all houses
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    console.log(allCountries);
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  //return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    console.log(allProperties);

    //remove duplicates
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // function to check if the string includes  '(any)'

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    //get the first value of the price and parse to the number
    const minPrice = parseInt(price.split(" ")[0]);

    //get the second value of the price which is a maximum number
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = houses.filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      //if all values are default
    if(isDefault(country) && isDefault(property) && isDefault(price)){
      return house
    }

    //if country is not default
    if(!isDefault(country) && isDefault(property) && isDefault(price)){
      return house.country === country
    }

    //if property is not default
    if(!isDefault(property) && isDefault(country) && isDefault(price)){
      return house.property === property
    }

    });
    console.log(newHouses)
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
