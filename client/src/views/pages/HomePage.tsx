import React from 'react'
import withLayout from '../../components/UI/Layout/WithLayout'
import useArtworkInit from '../../hooks/useArtworkInit'
import ArtworkCardsList from '../../components/UI/modules/ArtworksList/ArtworkCardsList'
import PageTitle from '../../components/UI/PageTitle'
import Container from '../../components/UI/Layout/Container'
import useArtwork from '../../hooks/useArtWork'
import Pagination from '../../components/UI/modules/Pagination/Pagination'
import { useSearchParams } from 'react-router-dom'
import ItemPerPageSelector from '../../components/UI/modules/ItemPerPageSelector/ItemPerPageSelector'
import Grid from '@mui/material/Unstable_Grid2'
import SearchField from '../../components/UI/modules/SearchField/SearchField'
import ListLoader from '../../components/UI/Loaders/ListLoader'

function HomePage(): JSX.Element {
  const [searchParams] = useSearchParams()
  const { isLoading, list } = useArtwork()
  const pageQuery = searchParams.get('page')
  const limitQuery = searchParams.get('limit')
  const searchQuery = searchParams.get('search')

  useArtworkInit({
    page: pageQuery,
    perPage: limitQuery,
    search: searchQuery
  })

  return (
    <>
      <Container max-width='xl'>
        <PageTitle />
        {isLoading
          ? <ListLoader />
          : (
            <>
              <Grid container spacing={2} minHeight={100}>
                <Grid
                  xs
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <ItemPerPageSelector
                    page={pageQuery}
                    limit={limitQuery}
                    search={searchQuery}
                  />
                  <SearchField />
                </Grid>
              </Grid>
              <ArtworkCardsList list={list} />
              <Pagination
                page={pageQuery}
                limit={limitQuery}
                search={searchQuery}
                />
            </>
            )}
      </Container>
    </>
  )
}

export default withLayout(HomePage)
