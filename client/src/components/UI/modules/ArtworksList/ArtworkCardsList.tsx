import React from 'react'
import styled from '@emotion/styled'
import ArtworkCard from './ArtworkCard'
import type { ReduceReturnType } from '../../../../redux/reducers/artworkSlice'

interface artWorkCardListProps {
  list: ReduceReturnType
}

function ArtworkCardsList({ list }: artWorkCardListProps): JSX.Element {
  const listSize = Object.values(list)

  return (
    <ArtworksList listSize={listSize.length}>
      {Object.values(list).map((artwork) => (
        <ArtworkCard key={artwork.id} {...artwork} />
      ))}
    </ArtworksList>
  )
}

export default ArtworkCardsList

const ArtworksList = styled.section<{ listSize: number }>`
  display: grid;
  grid-template-columns: ${props => props.listSize >= 3
    ? 'repeat(auto-fit, minmax(250px, 1fr));'
    : '1fr 1fr 1fr;'};
  gap: 1rem;
  margin-top: 2rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr 1fr;
  }
`
