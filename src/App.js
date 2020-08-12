import React, {useEffect} from 'react';
import Login from './login/Login';
import './App.css';
import {getAccessTokenFromUrl} from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./player/Player";
import {useDataLayerValue} from './data/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
    const [{token}, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getAccessTokenFromUrl();
        window.location.hash = '';
        const _token = hash['access_token'];

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token
            });

            spotify.setAccessToken(_token);
            spotify.getMe().then(user => {
                dispatch({
                    type: 'SET_USER',
                    user: user
                })
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists,
                })
            });
        }
    }, []);
    return <div className="app"> {token ? <Player spotify={spotify} /> : <Login/>}</div>;
}

export default App;
