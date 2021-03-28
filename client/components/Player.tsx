import React, {useEffect} from 'react';
import {Card, Grid, IconButton} from "@material-ui/core";
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import styles from "../styles/Player.module.scss";
import {ITrack} from "../types/track";
import TrackProgress from "./TrackProgress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";
import {setVolume} from "../store/action-creators/player";

let audio;

const Player = () => {
    // const track: ITrack =
    //     {
    //         _id: 'werttrereyyy12333',
    //         name: 'best song',
    //         artist: 'madonna',
    //         text: 'string',
    //         listens: 5,
    //         picture: 'http://localhost:5000/image/bb6dff33-61f1-40df-9dba-af2a6b8cd70d.jpg',
    //         audio: 'http://localhost:5000/audio/4bb8ce36-5c2b-47fc-9a6e-5e1a7326f928.mp3',
    //         comments: []
    //     }

    const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useAction()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
            play()
        }
    }, [active])

    const setAudio = () => {
        if (active) {
            audio.src = 'http://localhost:5000/' + active.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }
    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }
    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }
    const changeCurrenTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }
    if (!active) {
        return null
    }
    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {pause ? <PlayArrow/> : <Pause/>}
            </IconButton>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{active?.name}</div>
                <div style={{fontSize: 12, color: 'grey'}}>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrenTime}/>
            <VolumeUp style={{marginLeft: 'auto'}}></VolumeUp>
            <TrackProgress left={volume} right={100} onChange={changeVolume}/>
        </div>
    );
};

export default Player;
