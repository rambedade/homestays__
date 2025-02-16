import React, { useEffect, useState, createContext } from "react";
import housesData from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const uniqueCountries = [
      "Location (any)",
      ...new Set(housesData.map((house) => house.country)),
    ];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const uniqueProperties = [
      "Property type (any)",
      ...new Set(housesData.map((house) => house.type)),
    ];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (value) => value.includes("(any)");
    const [minPrice, , maxPrice] = price.split(" ").map(Number);

    const filteredHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      return (
        (isDefault(country) || house.country === country) &&
        (isDefault(property) || house.type === property) &&
        (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
      );
    });

    setTimeout(() => {
      setHouses(filteredHouses);
      setLoading(false);
    }, 500);
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
