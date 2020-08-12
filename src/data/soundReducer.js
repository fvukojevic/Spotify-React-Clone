export const soundInitialState = {
    audio: null,
    playing: false,
    volume: 0.3,
    repeat: false,
};

const soundReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AUDIO':
            return {
                ...state,
                audio: action.audio
            };
        case 'SET_PLAYING':
            if(!action.playing) {
                if(state.audio) {
                    state.audio.pause();
                }
            } else {
                if(state.audio) {
                    state.audio.play();
                }
            }
            return {
                ...state,
                playing: action.playing
            };
        case 'SET_VOLUME':
            if(state.audio) {
                state.audio.volume = action.volume;
            }
            return {
                ...state,
                volume: action.volume,
            };
        case 'SET_REPEAT':
            if(state.audio) {
                state.audio.loop = action.repeat;
            }
            return {
                ...state,
                repeat: action.repeat,
            };
        default:
            return state;
    }
};

export default soundReducer;