import React from 'react'
import styled from '@emotion/styled'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import useArtwork from '../../../../hooks/useArtWork'
import { useTheme } from '../../../../lib/styles/Theme/ThemeContext'
import { useDispatch } from '../../../../hooks/reduxHooks'
import {
  type ArtworkWithImage,
  addToFavorites,
  removeFromFavorites
} from '../../../../redux/reducers/artworkSlice'

interface FavoriteButtonProps {
  id: number
  fontSize: 'small' | 'medium' | 'large'
}

function FavoriteButton({ id, fontSize }: FavoriteButtonProps): JSX.Element {
  const { favorites, list, details } = useArtwork()
  const { theme } = useTheme()
  const dispatch = useDispatch()

  const favoriteItem = Object.values(favorites).find((item) => item.id === id)
  const isFavorite = favoriteItem?.id

  function toggleFavorite(e: React.MouseEvent | React.TouchEvent): void {
    e.preventDefault()
    const favoriteArtWork = details?.id
      ? details
      : list[id]

    if (favoriteArtWork?.id) {
      isFavorite
        ? dispatch(removeFromFavorites(favoriteArtWork.id as number))
        : dispatch(addToFavorites(favoriteArtWork as ArtworkWithImage))
    }
  }

  return (
    <HearthIcon onClick={toggleFavorite}>
      {isFavorite
        ? <StarRoundedIcon fontSize={fontSize} htmlColor={theme.palette.favButton} />
        : <StarBorderRoundedIcon fontSize={fontSize} htmlColor={theme.palette.favButton} />}
    </HearthIcon>
  )
}

export default FavoriteButton

const HearthIcon = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  font-size: 2rem;
`
