import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changedUrl = url;

  if (country === "Global" || country === "global") {
    changedUrl = url;
  } else if (country) {
    changedUrl = `${url}/countries/${country}`;
  }

  try {
    const { data } = await axios.get(changedUrl);

    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    return modifiedData;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/`);

    // const modifiedData = data.map((dailyData) => ({
    //   confirmed: dailyData.confirmed.value,
    //   deaths: dailyData.deaths.value,
    //   date: dailyData.lastUpdate,
    // }));

    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      date: data.lastUpdate,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.error(error);
  }
};
