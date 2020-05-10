import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading..";
  }
  console.log(lastUpdate);
  var currDate = new Date(lastUpdate);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {currDate.toDateString()} <br />
              {currDate.toLocaleTimeString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of Corona
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {currDate.toDateString()} <br />
              {currDate.toLocaleTimeString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from Corona
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {currDate.toDateString()} <br />
              {currDate.toLocaleTimeString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths cause by Corona
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
