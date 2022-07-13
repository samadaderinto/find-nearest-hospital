import React, { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Map from "./components/Map/map";
import { CssBaseline,Grid } from '@material-ui/core';
import HopitalList from "./components/List/list";


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
 

  const getHospitals = (): void => {
    const lat = currLocation?.lat;
    const long = currLocation?.long;

    const proxyAddress: string = "https://cors-anywhere.herokuapp.com/";
    const hospital_url: string =
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    const endpoint: string = `${proxyAddress}${hospital_url}location=${lat},${long}&type=hospital&radius=${radius}&key=${Key}`;
    fetch(endpoint)
      .then((resp) => resp.json())
      .then((data) => setResult(data.results));
  };
  
  return (
    <>
      <CssBaseline/>
      <Header />
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <HopitalList />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
