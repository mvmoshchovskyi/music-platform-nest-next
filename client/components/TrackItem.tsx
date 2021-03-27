import React from 'react';
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@material-ui/core";
import styles from '../styles/TrackItem.module.scss'
import {Delete, Pause, PlayArrow} from "@material-ui/icons";


interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    return (
        <Card className={styles.track}>
            <IconButton>
                {active ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <img src={track.picture} width={70} height={70}/>
            <Grid container direction='column' style ={{width:200, margin:'0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize:12 , color:'grey'}}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton style={{marginLeft:"auto"}}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;
