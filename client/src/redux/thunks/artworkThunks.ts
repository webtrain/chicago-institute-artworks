import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'
import { Api } from '../../lib/api/artworkInstitute/Api'
import type { Artwork, Pagination } from '../../lib/api/types/artworkInstituteType'

interface KnownError {
  message: string
}

export const fetchArtworks = createAsyncThunk<{ data: Artwork[], pagination: Pagination }, { page: string | null, perPage: string | null }, { rejectValue: string }>(
  'artworks/fetchartworks',
  async ({ page, perPage }, { rejectWithValue }) => {
    try {
      const response = await Api.artworks.getArtworks(page, perPage)
      return response
    } catch (err) {
      const error = err as AxiosError<KnownError>
      return rejectWithValue(error?.message)
    }
  }
)

export const fetchArtworkById = createAsyncThunk<{ data: Artwork }, string, { rejectValue: string }>(
  'artworks/fetchartworkById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await Api.artworks.getArtworkById(id)

      if (response.data?.image_id) {
        const image = await Api.artworksImages.getArtworkImage(response.data.image_id)

        if (image && typeof image === 'string') {
          const extended = {
            ...response.data,
            image
          }

          return { data: extended }
        }
      }

      return response
    } catch (err) {
      const error = err as AxiosError<KnownError>
      return rejectWithValue(error?.message)
    }
  }
)

export const fetchArtworksImages = createAsyncThunk(
  'artworks/fetchartworksImages',
  async ({ id, imageId }: { id: number, imageId: string }, { rejectWithValue }) => {
    try {
      const response = await Api.artworksImages.getArtworkImage(imageId)
      return { id, image: response }
    } catch (err) {
      const error = err as AxiosError<KnownError>
      return rejectWithValue(error?.message)
    }
  }
)

export const searchForArtworks = createAsyncThunk<{ data: Artwork[], pagination: Pagination }, { searchText: string, page: string | null, perPage: string | null }, { rejectValue: string }>(
  'artworks/searchForArtworks',
  async ({ searchText, page, perPage }, { rejectWithValue }) => {
    try {
      const response = await Api.artworks.search({ searchText, page, perPage })
      return response
    } catch (err) {
      const error = err as AxiosError<KnownError>
      return rejectWithValue(error?.message)
    }
  }
)
