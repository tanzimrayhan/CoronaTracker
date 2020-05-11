import React from "react";
import styles from "./App.module.css";

//Components
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryChooser from "./components/CountryChooser/CountryChooser";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {

    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country);

    //fetch the data

    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <CountryChooser handleCountryChange={this.handleCountryChange} />

        <Cards data={data} />
        <Chart data={data} country={country} />

      </div>
    );
  }
}

export default App;
