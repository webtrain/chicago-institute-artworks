import React, { type ChangeEvent } from 'react'
import { Pagination as MuiPagination } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import useArtwork from '../../../../hooks/useArtWork'
import { useSearchParams } from 'react-router-dom'
import { useUntil } from '../../../../hooks/mediaQuery'

interface PaginationProps {
  limit: string | null
  page: string | null
  search: string | null
}

function Pagination({ page, limit }: PaginationProps): JSX.Element | null {
  const [searchParams, setSearchParams] = useSearchParams()
  const { isLoading, pagination } = useArtwork()
  const isMobileScreen = useUntil('sm')

  function handleChange(e: ChangeEvent<unknown>, page: number): void {
    const params = [...searchParams]
      .reduce((paramsObj, [param, value]) => ({ ...paramsObj, [param]: value }), {})
    setSearchParams({ ...params, page: page.toString() })
  }

  if (isLoading && !page && !limit && !pagination.total_pages) return null

  return (
    <Grid container spacing={2} minHeight={120}>
      <Grid xs display='flex' justifyContent='center' alignItems='center'>
        <MuiPagination
          count={pagination.total_pages as number}
          siblingCount={isMobileScreen ? 0 : 1}
          color='primary'
          size={isMobileScreen ? 'medium' : 'large'}
          page={Number(page) || 1}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  )
}

export default Pagination
