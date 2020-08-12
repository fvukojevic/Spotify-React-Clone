export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    current_playlist: null,
    tracks: null,
    track: null,
    token: null,
};

const reducer = (state, action) => {
    // Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN": {
            return {
                ...state,
                token: action.token
            }
        }
        case "SET_PLAYLISTS": {
            return {
                ...state,
                playlists: action.playlists
            }
        }
        case 'SET_CURRENT_PLAYLIST': {
            let currentPlaylist = null;
            state.playlists.items.forEach(playlist => {
                if(playlist.id === action.id) {
                    currentPlaylist = playlist;
                }
            });
            return {
                ...state,
                current_playlist: currentPlaylist
            }
        }
        case 'SET_TRACKS': {
            return {
                ...state,
                tracks: action.tracks
            };
        }
        case 'SET_TRACK': {
            return {
                ...state,
                track: action.track
            };
        }
        default:
            return state;
    }
};

export default reducer;