import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import axios from "axios";
import { DataContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { selectedCountry } = useContext(DataContext);
  const [countryData, setCountryData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!selectedCountry) {
      navigate("/");
      return
    }
    axios.get(`https://restcountries.com/v3.1/name/${selectedCountry}`).then((response) => {
      console.log(response.data[0])
      setCountryData(response.data[0]);
    }).catch((error) => {
      console.error(error)
    });
  }, []);
  return (
    <div className="flex flex-col items-center min-h-screen w-screen bg-primary font-sans text-secondary">
      <Navbar />
      {(countryData) && (
        <div className="flex flex-col text-lg mt-[7rem]">
          <h1 className="text-4xl font-bold mb-5">{countryData.name.common}</h1>
          <div>{`Capital City: ${countryData.capital[0]}`}</div>
          <div>{`Population: ${countryData.population.toLocaleString()}`}</div>
          <div>{`Area: ${countryData.area.toLocaleString()}`}</div>
          <div>{`Currency: ${Object.keys(countryData.currencies)}`}</div>
          <div>{`Languages: ${Object.values(countryData.languages).join(', ')}`}</div>
          <img src={countryData.flags.png} className="mt-5" alt={countryData.flags.alt} />
        </div>
      )}

    </div>
  )
}

export default Details;