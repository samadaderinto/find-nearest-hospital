import React, { useState, useEffect } from "react";
import "./App.css";
import { strict } from "assert";

type cords = { lat: number; long: number };

const Key = "AIzaSyC3dgcvAZQqgHyNPAUO7XrQUpXisDFQaxM";

function App() {
  const [currLocation, setCurrLocation] = useState<cords>();
  const [radius, setRadius] = useState<string>("2000");
  const [result, setResult] = useState<Array<Object>>([]);

  useEffect((): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((currpossition) => {
        setCurrLocation({
          lat: currpossition.coords.latitude,
          long: currpossition.coords.longitude,
        });
      });
    } else {
      alert(" Location is not enabled ");
    }
  });
  console.log(currLocation);

  const getHospitals = (): void => {
    const lat = currLocation?.lat;
    const long = currLocation?.long;
    console.log(long, lat);

    const proxyAddress: string = "https://cors-anywhere.herokuapp.com/";
    const hospital_url: string =
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    const endpoint: string = `${proxyAddress}${hospital_url}location=${lat},${long}&type=hospital&radius=${radius}&key=${Key}`;
    fetch(endpoint)
      .then((resp) => resp.json())
      .then((data) => setResult(data.results));
  };
  return (
    <div className="App">
      <input
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
        placeholder="please insert radius in km"/>
      <button onClick={getHospitals}>Find Nearest Hospitals</button>
    </div>
  );
}

export default App;
