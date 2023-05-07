import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Artwork, Pagination } from '../../lib/api/types/artworkInstituteType'
import { fetchArtworkById, fetchArtworks, fetchArtworksImages, searchForArtworks } from '../thunks/artworkThunks'

export interface ArtworkState {
  isLoading: boolean
  pagination: Pagination | Record<string, unknown>
  list: ReduceReturnType
  details: Artwork | Record<string, unknown>
  favorites: ReduceReturnType
  error: string
}

export interface ArtworkWithImage extends Artwork {
  image: string
}

export type ReduceReturnType = Record<string, ArtworkWithImage>

const initialState: ArtworkState = {
  isLoading: true,
  pagination: {},
  list: {},
  details: {},
  favorites: {},
  error: ''
}

export const artworkSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers: {
    setDetails: (
      state,
      action: PayloadAction<Partial<ArtworkWithImage>>
    ) => {
      state.details = action.payload
    },
    clearDetails: (state) => {
      state.details = {}
    },
    initFavorites: (state, action: PayloadAction<ReduceReturnType>) => {
      state.favorites = action.payload
    },
    addToFavorites: (state, action: PayloadAction<ArtworkWithImage>) => {
      state.favorites = {
        ...state.favorites,
        [action.payload.id]: action.payload
      }
      window.localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete state.favorites[action.payload]
      window.localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArtworks.pending, (state) => {
      state.isLoading = true
      state.details = {}
    })
    builder.addCase(
      fetchArtworks.fulfilled,
      (
        state,
        action: PayloadAction<{ data: Artwork[], pagination: Pagination }>
      ) => {
        const { data, pagination } = action.payload
        state.isLoading = false
        state.pagination = pagination
        state.list = data.reduce(
          (artworks, artwork) => ({ ...artworks, [artwork.id]: artwork }),
          {}
        )
      }
    )
    builder.addCase(
      fetchArtworks.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      }
    )
    builder.addCase(fetchArtworkById.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchArtworkById.fulfilled,
      (state, action: PayloadAction<{ data: Artwork }>) => {
        state.isLoading = false
        state.details = action.payload.data
      }
    )
    builder.addCase(
      fetchArtworkById.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      }
    )
    builder.addCase(searchForArtworks.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      searchForArtworks.fulfilled,
      (
        state,
        action: PayloadAction<{ data: Artwork[], pagination: Pagination }>
      ) => {
        const { data, pagination } = action.payload
        state.isLoading = false
        state.pagination = pagination
        state.list = data.reduce(
          (artworks, artwork) => ({ ...artworks, [artwork.id]: artwork }),
          {}
        )
      }
    )
    builder.addCase(
      searchForArtworks.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      }
    )
    builder.addCase(
      fetchArtworksImages.fulfilled,
      (state, action: PayloadAction<{ id: number, image: string }>) => {
        const { id, image } = action.payload
        state.list[id] = { ...state.list[id], image }
      }
    )
    builder.addCase(fetchArtworksImages.rejected, (state, action) => {
      state.isLoading = false
      if (action.payload !== undefined) {
        state.error = (action.payload as string) ?? ''
      }
    })
  }
})

export const {
  setDetails,
  clearDetails,
  initFavorites,
  addToFavorites,
  removeFromFavorites
} = artworkSlice.actions

export default artworkSlice.reducer
