import React from 'react'
import ArtworkCardImage from './ArtworkCardImage'
import type { Thumbnail } from '../../../../lib/api/types/artworkInstituteType'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from '../../../../hooks/reduxHooks'
import { setDetails } from '../../../../redux/reducers/artworkSlice'
import FavoriteButton from '../FavoriteButton/FavoriteButton'

interface ArtworkCardProps {
  id: number
  title: string
  thumbnail: Thumbnail
  image?: string
  image_id: string
}

function ArtworkCard(props: ArtworkCardProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, title, thumbnail, image, image_id } = props

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleClick(): void {
    dispatch(setDetails(props))
    navigate(`/artwork/${id}`)
  }

  return (
    <Card>
      <CardImageWrapper onClick={handleClick}>
        <ArtworkCardImage
          id={id}
          imageId={image_id}
          image={image}
          src={image ?? thumbnail?.lqip}
          alt={thumbnail?.alt_text || 'Default placeholder'}
        />
      </CardImageWrapper>
      <CardTitleWrapper>
        <CardTitle>{title}</CardTitle>
        <FavoriteButton id={id} fontSize='medium' />
      </CardTitleWrapper>
    </Card>
  )
}

export default ArtworkCard

const Card = styled.article`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  box-shadow: ${(props) => props.theme.shadows['5']};
`
const CardImageWrapper = styled.div``

const CardTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const CardTitle = styled.h4`
  padding: 0.5rem;
`
