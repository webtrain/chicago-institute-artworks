import React from 'react'
import { initFavorites } from '../redux/reducers/artworkSlice'
import { useDispatch } from './reduxHooks'
import useLocalStorage from './useLocalStorage'

let initialized: boolean

function useFavoritesInit(): null {
  const dispatch = useDispatch()
  const [favorites] = useLocalStorage('favorites')

  const favoritesLength = favorites ? Object.values(favorites)?.length : 0

  React.useEffect(() => {
    if (!initialized && favoritesLength) {
      dispatch(initFavorites(favorites))
      initialized = true
    }
  }, [initialized, favorites])

  return null
}

export default useFavoritesInit
