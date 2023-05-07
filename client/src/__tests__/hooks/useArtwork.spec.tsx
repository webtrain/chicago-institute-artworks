// Importáljuk a szükséges modulokat

import * as redux from '../../hooks/reduxHooks'
import useArtwork from '../../hooks/useArtWork'

describe('useArtwork hook', () => {
  it('should return the correct state from useSelector', () => {
    // Definiáljuk a mock useSelector függvényt
    jest.spyOn(redux, 'useSelector').mockReturnValue({
      artworkInstitute: {
        isLoading: true,
        pagination: {},
        list: {},
        details: {},
        favorites: {},
        error: ''
      }
    })

    const artworkState = useArtwork()

    expect(artworkState).toEqual({
      artworkInstitute: {
        isLoading: true,
        pagination: {},
        list: {},
        details: {},
        favorites: {},
        error: ''
      }
    })
  })
})
