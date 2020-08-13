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
    const [{track, tracks}, dispatch] = useDataLayerValue();
    const [{audio, playing, volume, repeat, shuffle}, soundDispatch] = useSoundLayerValue();


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

    const setRepeat = () => {
        if(!repeat && shuffle) {
            setShuffle();
        }
        soundDispatch({
            type: "SET_REPEAT",
            repeat: !repeat
        });
    };

    const setShuffle = () => {
        if(!shuffle && repeat) {
            setRepeat();
        }
        soundDispatch({
            type: "SET_SHUFFLE",
            shuffle: !shuffle
        });
    };

    const handleChange = (event, value) => {
        soundDispatch({
            type: "SET_VOLUME",
            volume: value / 100
        });
    };

    if(audio) {
        audio.onended = () => {
            if(shuffle) {
                while(true) {
                    let randomTrackNumber = Math.floor((Math.random() * tracks.items.length));
                    let randomTrack = tracks.items[randomTrackNumber].track;
                    if(track !== randomTrack) {
                        dispatch({
                            type: 'SET_TRACK',
                            track: randomTrack
                        });

                        let wasPlaying = playing;
                        soundDispatch({
                            type: 'SET_PLAYING',
                            playing: false,
                        });

                        let audio = new Audio(randomTrack.preview_url);
                        audio.loop = repeat;
                        soundDispatch({
                            type: 'SET_AUDIO',
                            audio: audio
                        });

                        if(wasPlaying) {
                            soundDispatch({
                                type: 'SET_PLAYING',
                                playing: true,
                            });
                        }

                        document.title = `${randomTrack.name} · ${randomTrack.artists.map((artist) => artist.name).join(', ')}`
                        break
                    }
                }
            }
            if(!shuffle && !repeat) {
                soundDispatch({
                    type: 'SET_PLAYING',
                    playing: false,
                });
            }
        }
    }

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
                <ShuffleIcon onClick={track? setShuffle : null} className={shuffle ? 'footer__green' : 'footer__icon'}/>
                <SkipPreviousIcon className='footer__icon'/>
                {playing ? <PauseCircleOutlineIcon onClick={track ? stopPlaying : null} fontSize='large'
                                                   className='footer__icon'/> :
                    <PlayCircleOutlineIcon onClick={track ? startPlaying : null} fontSize='large'
                                           className='footer__icon'/>}
                <SkipNextIcon className='footer__icon'/>
                <RepeatIcon onClick={track? setRepeat : null} className={repeat ? 'footer__green' : 'footer__icon'}/>
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