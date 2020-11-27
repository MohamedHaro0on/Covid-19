import React from 'react'
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import ClassNames from "./Card.module.css";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return (<div> Loading ...!!</div>)
    }
    else {
        const CardsData = [{...confirmed , title : "Infected"}, {...recovered , title : "Recoverd"}, {...deaths , title : "Deaths"}];
        let Output = CardsData.map((element, index) => {
            let AppliedClasses = [ClassNames.Card , ClassNames[element.title]]
            return (
                <Grid item component={Card} key = {index} xs = {12} md = {3} className = {AppliedClasses.join(" ")}>
                    <CardContent>
                        <Typography gutterBottom>{element.title}</Typography>
                        <Typography gutterBottom variant="h5">
                            <CountUp start={0} end={element.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography gutterBottom color="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            )
        })
    return (
        <div className={ClassNames.Container}>
            <Grid container spacing={3} justify={"space-around"}>
                {Output}
            </Grid>
        </div>
    )
}
}
export default Cards;