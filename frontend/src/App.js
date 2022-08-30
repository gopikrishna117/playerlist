import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPlayers } from "./actions/players.js"
import Forms from "./components/forms/form";
import Players from "./components/players/players";
import useStyle from "./style.js";
import logo from "../src/images/logo.jpg"
const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyle();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayers())
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Players List</Typography>
        <img className={classes.image} src={logo} alt="logo" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6}>
              <Players setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Forms currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
