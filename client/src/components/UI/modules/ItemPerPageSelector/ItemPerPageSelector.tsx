import React from 'react'
import { Box, FormControl, MenuItem, Select, type SelectChangeEvent } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

interface ItemPerPageSelectorProps {
  page: string | null
  limit: string | null
  search: string | null
}

function ItemPerPageSelector({ page, limit, search }: ItemPerPageSelectorProps): JSX.Element | null {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams()

  const handleChange = (e: SelectChangeEvent): void => {
    const params = {}

    if (search) Object.assign(params, { search })
    if (page) Object.assign(params, { page })
    Object.assign(params, { limit: e.target.value })

    setSearchParams(params)
  }

  return (
    <Box sx={{ width: 90, marginTop: '1rem', textAlign: 'center' }}>
      <FormControl fullWidth>
        <Select
          labelId='itemPerPage'
          id='selector'
          value={limit ?? '25'}
          onChange={handleChange}
        >
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default ItemPerPageSelector
