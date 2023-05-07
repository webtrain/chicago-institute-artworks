import React from 'react'
import styled from '@emotion/styled'
import DefaultImage from '@mui/icons-material/Image'
import { useDispatch } from '../../../../hooks/reduxHooks'
import { fetchArtworksImages } from '../../../../redux/thunks/artworkThunks'

interface ArtworkCardImagePorps {
  id: number
  imageId: string
  image: string | undefined
  src: string | undefined
  alt: string
}

function ArtworkCardImage({ id, image, imageId, src, alt }: ArtworkCardImagePorps): JSX.Element {
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!image && imageId) {
      void (async () => {
        await dispatch(fetchArtworksImages({ id, imageId }))
      })()
    }
  }, [])

  if (!src) {
    return <DefaultImage
      fontSize='large'
      sx={{ width: '100%', height: '100%' }}
    />
  }

  return (
    <ArtworkImage>
      <img src={src} alt={alt} width='100%' />
    </ArtworkImage>
  )
}

export default ArtworkCardImage

const ArtworkImage = styled.figure`
  height: 300px;
  overflow: hidden;
  margin: 0;

  img {
    height: 100%;
    object-fit: cover;
    transform: scale(1.1);
  }
`
