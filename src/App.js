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
    console.log(fetchedData);
    //fetch the data

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryChooser handleCountryChange={this.handleCountryChange} />
        <Chart />

      </div>
    );
  }
}

export default App;
