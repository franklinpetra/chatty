import React from 'react';
import{ Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import image from "./assets/lineOfMaskWearers.jpg";
import bannerImage from "./assets/covid-19-icon.png";

class App extends React.Component {
  state = {
    data: {},
    country:"",
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country)=>{
  const data = await fetchData(country);

  this.setState({ data, country:country });
}

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.header} src={ bannerImage } alt="Covid Banner"/>
        <img className={styles.image} style={{mixBlendMode: "multiply"}} src={image} alt="match_distancing"/>
        <Cards data={ data }/>
        <CountryPicker handleCountryChange={ this.handleCountryChange }/>
        <Chart data={ data } country={ country }/>
      </div>
    );
  }
}

export default App;