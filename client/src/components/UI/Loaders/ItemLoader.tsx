import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import styled from '@emotion/styled'

function ItemLoader(): JSX.Element {
  return (
    <Content>
      <Stack spacing={1} display='flex' flexDirection='column' sx={{ margin: '0', height: '100%' }}>
        <Skeleton height={80} width={100} />
        <Skeleton variant='rounded' sx={{
          maxHeight: '550px', height: '100%', width: '100%', marginTop: '1rem!important'
        }} />
        <Skeleton variant='text' sx={{ height: '2rem', maxWidth: '33rem' }} />
        <Skeleton variant='text' sx={{ height: '2rem', maxWidth: '20rem' }} />
        <Skeleton variant='text' sx={{ height: '2rem', maxWidth: '17rem' }} />
        <Skeleton variant='text' sx={{ height: '2rem', maxWidth: '19rem' }} />
      </Stack>
    </Content>
  )
}

export default ItemLoader

const Content = styled.div`
  height: 100vh;

  .MuiStack-root {
    .MuiSkeleton-text:not(:first-of-type) {
      transform: initial;
      margin: .5rem 0;
    }
    span {
      margin: 0;
      padding: 0;
    }
  }
`
