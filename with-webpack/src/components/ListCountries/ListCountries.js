import React from "react";
import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import CountriesService from "../../services/countries.service";

const service = new CountriesService();

const ListCountries = () => {
  const [countries, setCountries] = React.useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await service.getCountries());
    };
    fetchCountries();
  }, []);

  if (countries.length === 0) {
    return <Typography>Nothing to show</Typography>;
  }

  return (
    <Grid>
      {countries.map((country) => (
        <Typography key={country?.code}>{country.name}</Typography>
      ))}
    </Grid>
  );
};

export default ListCountries;
