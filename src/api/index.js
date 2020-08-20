import axios from "axios"
const Url = "https://covid19.mathdro.id/api";

export const FetchData = async (country)=>{
    let url  = (country && country!=="global") ? Url + "/countries/"+ country  :  Url ;
    try{
        const {data : {confirmed , recovered   , lastUpdate  , deaths}} = await axios.get(url) ;

        return {confirmed , recovered   , lastUpdate , deaths } ;
    }
    catch(error){
        console.log("The Error " , error ) ;
    }
}
export const fetchDailyData = async ()=>{
    try{
        const {data} = await axios.get(`${Url}/daily`) ;
        const ModifiedData = data.map((dailyData)=>({
                confirmed : dailyData.confirmed.total ,
                deaths : dailyData.deaths.total ,
                date : dailyData.reportDate  ,
        }))
        return ModifiedData ;
    }
    catch(error){
    }
}
export const fetchCountries = async ()=>{
    try{
        const {data : {countries}} = await axios.get(`${Url}/countries`)
        return countries.map((country)=>country.name)
    }
    catch(error){
    }
}

