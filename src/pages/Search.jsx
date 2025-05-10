import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import axios from "axios";
import { DataContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { allCountries, setAllCountries, searchQuery, setSelectedCountry } = useContext(DataContext);
  const [searchResult, setSearchResult] = useState([]);

  const navigate = useNavigate();

  const filterCountries = (countries, query) => {
    return countries.filter((country) => 
      country.name.common.toLowerCase().includes(query.toLowerCase())
    )
  }

  const handleCountryClick = (country) => {
    setSelectedCountry(country)
    navigate('/detail')
  }

  useEffect(() => {
    console.log(searchQuery)
    console.log(allCountries)
    if (allCountries.length > 0) {
      setSearchResult(filterCountries(allCountries, searchQuery))
      return;
    }
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data)
      setSearchResult(filterCountries(response.data, searchQuery))
      console.log(filterCountries(response.data, searchQuery))
    }).catch((error) => {
      console.error(error)
    });
  }, []);
  return (
    <div className="flex flex-col items-center min-h-screen w-screen bg-primary font-sans text-secondary">
      <Navbar />
      <div className="mt-[7rem] flex flex-col h-full items-center">
        <h1 className="mb-10 text-center text-4xl font-semibold">Search Page</h1>
        <p className="mb-10 text-center text-lg font-semibold w-[50%]">{"WorldUniversity is an innovative platform specifically designed to help students explore the world. Here, you can find comprehensive information about various countries around the globe, ranging from basic data to in-depth details that can help you better understand each country."}</p>
        <div className="text-2xl font-bold mb-10">All Countries</div>
        <div className="flex flex-wrap justify-center items-center">
          {searchResult.map((country, index) => {
            return (
              <div key={index} className="m-5 hover:cursor-pointer space-y-3 hover:-translate-y-5 transition" onClick={() => {handleCountryClick(country.name.common)}}>
                <img src={country.flags.png} alt={country.name.common} />
                <div className="text-center text-xl font-semibold">{country.name.common}</div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Search;