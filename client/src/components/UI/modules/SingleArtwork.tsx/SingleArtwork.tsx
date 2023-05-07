/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import styled from '@emotion/styled'
import Button from '../../Button'
import { Stack } from '@mui/material'
import ArtworkImage from './ArtworkImage'
import { type ArtworkWithImage } from '../../../../redux/reducers/artworkSlice'
import { useNavigate } from 'react-router-dom'
import FavoriteButton from '../FavoriteButton/FavoriteButton'

function SingleArtwork(props: ArtworkWithImage): JSX.Element {
  const navigate = useNavigate()

  const { image, title, artist_title, department_title, department_id, id } = props

  function navigateBack(): void {
    navigate(-1)
  }

  return (
    <>
      <ArtworkBody>
        <Button variant='contained' onClick={navigateBack}>
          Back
        </Button>
        <Stack sx={{ marginTop: '2rem' }}>
          <ArtworkImage src={image} title={title} />
          <Details>
            <TitleAndAuthor>
              <div>
                <h2>{title}</h2>
                <p>Author: {artist_title}</p>
              </div>
              <FavoriteButton id={id} fontSize='large' />
            </TitleAndAuthor>
            <DepartMent>
              <strong>Department:</strong>
              <p>{department_title}</p>
              <p>Department id: {department_id}</p>
            </DepartMent>
          </Details>
        </Stack>
      </ArtworkBody>
    </>
  )
}

export default SingleArtwork

const ArtworkBody = styled.div`
  height: 100%;
`
const Details = styled.div`
`

const TitleAndAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
  }

  p { margin: 0 }

  h2,p { display: inline-block; }
`
const DepartMent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .2rem;

  & > *:not(strong) {
    margin: 0 0 0 1rem;
  }
`
