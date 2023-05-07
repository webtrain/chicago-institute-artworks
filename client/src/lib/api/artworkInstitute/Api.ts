import axios from 'axios'
import ArtworksApi from './ArtworksApi'
import ArtworksImagesApi from './ArtWorksImagesApi'

class API {
  readonly baseURL = process.env.VITE_BASE_API_URL
  readonly imageBaseURL = process.env.VITE_IMAGE_BASE_URL

  readonly client = axios.create({
    baseURL: this.baseURL,
    timeout: 5000
  })

  readonly images = axios.create({
    baseURL: this.imageBaseURL,
    timeout: 5000
  })

  readonly artworks = new ArtworksApi(this.client)
  readonly artworksImages = new ArtworksImagesApi(this.images)
}

export const Api = new API()
