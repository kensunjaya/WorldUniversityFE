import { useEffect, useState } from "react";
import Navbar from "../components/navbar"
import axios from "axios";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.error(error)
    });
  }, []);
  return (
    <div className="flex flex-col items-center min-h-screen w-screen bg-primary font-sans text-secondary">
      <Navbar />
      <div className="mt-[7rem] flex flex-col h-full items-center">
        <h1 className="mb-10 text-center text-4xl font-semibold">Welcome to WorldUniversity</h1>
        <p className="mb-10 text-center text-lg font-semibold w-[50%]">{"WorldUniversity is an innovative platform specifically designed to help students explore the world. Here, you can find comprehensive information about various countries around the globe, ranging from basic data to in-depth details that can help you better understand each country."}</p>
        <div className="text-2xl font-bold mb-10">All Countries</div>
        <div className="flex flex-wrap justify-center items-center">
          {countries.map((country, index) => {
            return (
              <div key={index} className="m-5 hover:cursor-pointer space-y-3 hover:-translate-y-5 transition">
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

export default Home;