import { useSelector } from './reduxHooks'
import type { ArtworkState } from '../redux/reducers/artworkSlice'

function useArtwork(): ArtworkState {
  const state = useSelector((state) => state.artworkInstitute)
  return state
}

export default useArtwork
