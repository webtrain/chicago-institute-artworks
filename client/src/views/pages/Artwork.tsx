import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from '../../hooks/reduxHooks'
import PageTitle from '../../components/UI/PageTitle'
import Container from '../../components/UI/Layout/Container'
import SingleArtwork from '../../components/UI/modules/SingleArtwork.tsx/SingleArtwork'
import { fetchArtworkById } from '../../redux/thunks/artworkThunks'
import useArtwork from '../../hooks/useArtWork'
import { type ArtworkWithImage } from '../../redux/reducers/artworkSlice'
import ItemLoader from '../../components/UI/Loaders/ItemLoader'

function Artwork(): JSX.Element {
  const dispatch = useDispatch()
  const params = useParams()
  const { isLoading, details } = useArtwork()
  const id = params.id

  React.useEffect(() => {
    if (!details?.id) {
      if (id) {
        void (async () => {
          await dispatch(fetchArtworkById(id))
        })()
      }
    }
  }, [details.id])

  return (
    <>
      <Container max-width='xl'>
        <PageTitle id={id} />
        {isLoading
          ? <ItemLoader />
          : details.id?.toString() === id && (
            <SingleArtwork {...(details as ArtworkWithImage)} />
          )}
      </Container>
    </>
  )
}

export default Artwork
