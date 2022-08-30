import React from "react"
import useStyles from "./style.js";
import { CardActions, Card, Button, CardContent, CardMedia, Typography } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Player = ({ player, setCurrentId }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={player.selectedFile} title={player.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">{player.team}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(player._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">Avg:{player.average}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{player.name}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{player.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => { }}><ThumbUpAltIcon fontSize="small" />Like {player.likeCount}</Button>
                <Button size="small" color="primary" onClick={() => { }}><DeleteIcon fontSize="small" />Delete</Button>
            </CardActions>
        </Card>
    );
}

export default Player;