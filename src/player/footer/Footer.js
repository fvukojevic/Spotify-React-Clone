import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid, Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import {useDataLayerValue} from "../../data/DataLayer";
import {useSoundLayerValue} from "../../data/SoundLayer";

function Footer() {
    const [{track}] = useDataLayerValue();
    const [{playing, volume}, soundDispatch] = useSoundLayerValue();


    const startPlaying = () => {
        soundDispatch({
            type: "SET_PLAYING",
            playing: true
        });
        soundDispatch({
            type: "SET_VOLUME",
            volume: volume / 100
        });
    };

    const stopPlaying = () => {
        soundDispatch({
            type: "SET_PLAYING",
            playing: false
        });
    };

    const handleChange = (event, value) => {
        soundDispatch({
            type: "SET_VOLUME",
            volume: value / 100
        });
    };
    return (
        <div className="footer">
            <div className='footer__left'>
                <img className='footer__albumLogo' src={track ? track.album.images[0].url : ''} alt=""/>
                <div className='footer__songInfo'>
                    <h4>{track ? track.name : 'No song selected'}</h4>
                    <p>{track ? track.artists.map((artist) => artist.name).join(", ") : null}</p>
                </div>
            </div>
            <div className='footer__center'>
                <ShuffleIcon className='footer__green'/>
                <SkipPreviousIcon className='footer__icon'/>
                {playing ? <PauseCircleOutlineIcon onClick={track ? stopPlaying : null} fontSize='large'
                                                   className='footer__icon'/> :
                    <PlayCircleOutlineIcon onClick={track ? startPlaying : null} fontSize='large'
                                           className='footer__icon'/>}
                <SkipNextIcon className='footer__icon'/>
                <RepeatIcon className='footer__green'/>
            </div>
            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="off"
                            onChange={handleChange}
                            min={0}
                            max={100}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer