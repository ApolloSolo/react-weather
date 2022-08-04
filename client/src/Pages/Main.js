import React, { useState, useEffect } from "react";
import axios from "axios";
import ZipSearch from "../Components/ZipSearch";
import HourlyCard from "../Components/HourlyCard";

const Main = () => {
  const [formData, setFormData] = useState("");
  const [forecastData, setForcaseData] = useState([]);
  const [loading, setLoading] = useState(true);

  const forecastByZip = async (zip) => {
    console.log(zip);
    const options = {
      method: "GET",
      url: `https://aerisweather1.p.rapidapi.com/forecasts/${zip}`,
      params: { plimit: "2", filter: "1hr" },
      headers: {
        "X-RapidAPI-Key": "b1a201dd5cmshf3e45dc8b9df400p13268fjsn118dd2670088",
        "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response);
        setForcaseData(response.data.response)
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="h-screen w-full">
      <ZipSearch
        zip={formData}
        forecastByZip={forecastByZip}
        setFormData={setFormData}
      />
      {
        loading ? (
          false
        ) : (
          <div>
            <HourlyCard periods={forecastData[0].periods}/>
          </div>
        )
      }
    </div>
  );
};

export default Main;
