import { createStore } from 'redux';

// Ação para definir o vídeo em reprodução
export const setPlayingVideoId = (videoId) => ({
  type: 'SET_PLAYING_VIDEO_ID',
  payload: videoId,
});

// Redutor para atualizar o estado de reprodução
const playingVideoReducer = (state = null, action) => {
  if (action.type === 'SET_PLAYING_VIDEO_ID') {
    return action.payload;
  }
  return state;
};

// Cria a store do Redux
const store = createStore(playingVideoReducer);

export default store;
