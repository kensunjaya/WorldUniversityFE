import { useState } from "react";
import { DataContext } from "../context/Context";

export const ContextProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <DataContext value={{allCountries, setAllCountries, searchQuery, setSearchQuery, selectedCountry, setSelectedCountry}}>
      { children }
    </DataContext>
  )
}