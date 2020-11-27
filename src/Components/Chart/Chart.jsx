import React, { useState, useEffect } from 'react'
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";
import ClassNames from "./Chart.module.css";
const Chart = ({ data : {confirmed , deaths , recovered }, country }) => {
    let [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            setDailyData(await fetchDailyData());
        }
        fetch();
    },[])
    const LineChart = dailyData.length ? (
        <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map((({ confirmed }) => confirmed)),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true,
                }, {
                    data: dailyData.map((({ deaths }) => deaths)),
                    label: "Deathss",
                    backgroundColor: "rgba(255 , 0 , 0 , .5)",
                    borderColor: "red",
                    fill: true,
                }]
            }}
        />
    ) : null;
    const BarChart = (
        confirmed ? <Bar
            data={{
                labels: ["Infected ", "Recovered", "Deaths"],
                datasets: [{
                    label: "People",
                    backgroundColor: ["rgba(0,0,255,.5)", "rgba(0,255,0,.5)", "rgba(255,0,0,.5)"],
                    data : [confirmed.value,  recovered.value , deaths.value ]
                }],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` }
            }}
        /> : null
    )
    return (
            <div className={ClassNames.Container}>{country && country !== "global" ? BarChart : LineChart}</div>
    )
}
export default Chart;