import React from 'react'
import withLayout from '../../components/UI/Layout/WithLayout'
import PageTitle from '../../components/UI/PageTitle'
import Container from '../../components/UI/Layout/Container'
import ArtworkCardsList from '../../components/UI/modules/ArtworksList/ArtworkCardsList'
import useArtwork from '../../hooks/useArtWork'

function FavoriteArtworks(): JSX.Element {
  const { favorites } = useArtwork()

  return (
    <>
      <Container max-width='xl'>
        <PageTitle />
        <ArtworkCardsList list={favorites} />
      </Container>
    </>
  )
}

export default withLayout(FavoriteArtworks)
