import { Api } from '../../lib/api/artworkInstitute/Api'
import ArtworksApi from '../../lib/api/artworkInstitute/ArtworksApi'
import ArtworksImagesApi from '../../lib/api/artworkInstitute/ArtWorksImagesApi'

describe('API', () => {
  test('should have artworks property as an instance of ArtworksApi', () => {
    expect(Api.artworks).toBeInstanceOf(ArtworksApi)
  })

  test('should have artworksImages property as an instance of ArtworksImagesApi', () => {
    expect(Api.artworksImages).toBeInstanceOf(ArtworksImagesApi)
  })
})
