import React from 'react'
import styled from '@emotion/styled'
import DefaultImage from '@mui/icons-material/Image'
import Grid from '@mui/material/Unstable_Grid2'

interface AtrworkImageProps {
  src: string
  title: string
}

function ArtworkImage({ src, title }: AtrworkImageProps): JSX.Element {
  if (!src) {
    return (
      <Grid container spacing={2} minHeight={120}>
        <Grid xs display='flex' justifyContent='center' alignItems='center'>
          <DefaultImage
            fontSize='large'
            sx={{ maxWidth: '600px', width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
    )
  }

  return (
      <Image>
        <img src={src} alt={title} />
      </Image>
  )
}

export default ArtworkImage

const Image = styled.figure`
overflow: hidden;
margin: 0 0 1rem 0;

img {
    border-radius: 10px;
    width: 100%;
    object-fit: cover;
  }
`
