import React, { Component } from 'react'
import ClassNames from "./App.module.css" ;
import {Cards ,Chart , CountryPicker} from "./Components"
import {FetchData} from "./api" ;
import covid from "./Images/covid.png";
export class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
          data : {} ,
          country : null , 
      }
      this.handleCountryChange = this.handleCountryChange.bind(this) ;
    }
    
  handleCountryChange = async(country)=>{
    // Fetching the Data, 
    const data = await FetchData(country) ;
    this.setState({data , country})
  }
  async componentDidMount (){
    const data = await FetchData() ;
    this.setState({data})
  }
  render() {
    let {data , country} = this.state;
    return ( 
      <div className = {ClassNames.Container}>
          <img src= {covid} className = {ClassNames.Image} alt = {"Covid19"} />
          <Cards data = {data}/>
          <CountryPicker PickCountry = {this.handleCountryChange}/>
          <Chart data = {data} country = {country} />
      </div>
    )
  }
}

export default App;
