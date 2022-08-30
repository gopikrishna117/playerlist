import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Player from "./player/player.js"
import useStyles from "./styles.js";
import { useSelector } from "react-redux";

const Players = ({setCurrentId}) => {
    const classes = useStyles();
    const players = useSelector((store) => store.players)
    // console.log(players);
    return (
        !players.length ? <CircularProgress/> :(
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {players.map((player)=>(
                    <Grid key={player._id} item xs={12} sm={6}>
                        <Player player={player} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Players;