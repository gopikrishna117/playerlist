import React, { useState, useEffect } from "react";
import useStyles from "./style.js";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPlayers, updatePlayers } from "../../actions/players.js";
import { useSelector } from "react-redux";

const Forms = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const player = useSelector((state) => currentId ? state.players.find((p) => p._id === currentId) : null);
    const [playerData, setPlayerData] = useState({ team: '', name: '', description: '', average: '', selectedFile: '' })
    const dispatch = useDispatch();
    useEffect(() => {
        if (player) setPlayerData(player);
    }, [player])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            // console.log("if block")
            // console.log(playerData)
            dispatch(updatePlayers(currentId, playerData))
        } else {
            // console.log("else block")
            dispatch(createPlayers(playerData));
        }
        clear();
    }
    const clear = () => {
        setCurrentId(null);
        setPlayerData({ team: '', name: '', description: '', average: '', selectedFile: '' });
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" >{currentId ? 'Update' : 'Add'} a  Player</Typography>
                <TextField name="team" variant="outlined" label="Team" fullWidth value={playerData.team} onChange={(e) => setPlayerData({ ...playerData, team: e.target.value })} />
                <TextField name="playerName" variant="outlined" label="Player Name" fullWidth value={playerData.name} onChange={(e) => setPlayerData({ ...playerData, name: e.target.value })} />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={playerData.description} onChange={(e) => setPlayerData({ ...playerData, description: e.target.value })} />
                <TextField name="average" variant="outlined" label="Average" fullWidth value={playerData.average} onChange={(e) => setPlayerData({ ...playerData, average: e.target.value })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPlayerData({ ...playerData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Forms;