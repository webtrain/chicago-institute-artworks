import type { AxiosInstance, AxiosResponse } from 'axios'

export interface GetArtworkImageResponse {
  data: any
}

class ArtworksImagesApi {
  images: AxiosInstance

  constructor (images: AxiosInstance) {
    this.images = images
  }

  getArtworkImage = async (imageId: string): Promise<string> => {
    const response: AxiosResponse = await this.images.get<string>(`/${imageId}/full/843,/0/default.jpg`, {
      responseType: 'arraybuffer'
    })

    const base64 = window.btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    )

    return `data:image/gif;base64,${base64}`
  }
}

export default ArtworksImagesApi
