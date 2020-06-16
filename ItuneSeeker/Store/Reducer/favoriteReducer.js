const initialState = { favoritesSong: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteFilmIndex = state.favoritesSong.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        nextState = {
          ...state,
          favoritesSong: state.favoritesSong.filter( (item, index) => index !== favoriteFilmIndex)
        }
      }
      else {
        nextState = {
          ...state,
          favoritesSong: [...state.favoritesSong, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite