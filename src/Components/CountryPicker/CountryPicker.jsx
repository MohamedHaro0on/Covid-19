import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from "@material-ui/core";
import ClassNames from "./CountryPicker.module.css";
import { fetchCountries } from "../../api/index";

const CountryPicker = ({PickCountry}) => {
    let [FetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const getData = async () => {
            setFetchedCountries(await fetchCountries());
        }
        getData();
    }, []);
    return (
        <div className={ClassNames.Container}>
            <FormControl className={ClassNames.FormControl}>
                <NativeSelect onChange = {(event)=>PickCountry(event.target.value)}>
                    <option value="global"> Global</option>
                    {FetchedCountries.map((country, index) => (<option key={index} value={country}>{country}</option>))}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default CountryPicker;