import styled from '@emotion/styled'
import { Box, Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'

function ListLoader(): JSX.Element {
  return (
    <Content>
      <Stack spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid
          container
          spacing={2}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          sx={{ margin: '0' }}
        >
          <Skeleton height={90} width={100} />
          <Skeleton height={90} width={250} />
        </Grid>
        <Grid
          container
          spacing={2}
          display='flex'
          justifyContent='center'
          gap='2rem'
          sx={{ width: '100%' }}
        >
          {Array.from(Array(12)).map((_, index) => (
            <Box key={index}>
              <Skeleton
                variant='rounded'
                sx={{ minWidth: '250px', width: '100%', height: '250px' }}
              />
              <Skeleton
                variant='text'
                sx={{ fontSize: '1.5rem', width: '10rem' }}
              />
              <Skeleton
                variant='text'
                sx={{ fontSize: '1.5rem', width: '13rem' }}
              />
            </Box>
          ))}
        </Grid>
        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Skeleton sx={{ height: '90px', minWidth: '300px', maxWidth: '500px', width: '100%' }} />
        </Stack>
      </Stack>
    </Content>
  )
}

export default ListLoader

const Content = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
`
