import type { AxiosInstance } from 'axios'
import type { Artwork, ArtworkInstituteType, Pagination } from '../types/artworkInstituteType'

export interface GetArtworksResponse {
  data: Artwork[]
  pagination: Pagination
}

export interface GetArtworkByIdResponse {
  data: Artwork
}

class ArtworksApi {
  client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }

  getArtworks = async (page: string | null, perPage: string | null): Promise<GetArtworksResponse> => {
    const response = await this.client.get<ArtworkInstituteType>(`/artworks/${page ? `?page=${page}` : '?page=1'}${perPage ? `&limit=${perPage}` : '&limit=25'}`)
    const { data: { data, pagination } } = response
    return { data, pagination }
  }

  getArtworkById = async (artWorkId: string): Promise<GetArtworkByIdResponse> => {
    const response = await this.client
      .get<Pick<ArtworkInstituteType, 'config' | 'info'> & { data: Artwork } >(`/artworks/${artWorkId}`)
    const { data: { data } } = response
    return { data }
  }

  search = async ({ searchText, page, perPage }: { searchText: string, page: string | null, perPage: string | null }): Promise<GetArtworksResponse> => {
    const response = await this.client.get<ArtworkInstituteType>(`/artworks/search?q=${searchText}&page=${page ?? 1}&limit=${perPage ?? 25}&fields=id,title,image_id,thumbnail,department`)
    const { data: { data, pagination } } = response
    return { data, pagination }
  }
}

export default ArtworksApi
