import React, { type ChangeEvent } from 'react'
import { Stack, TextField } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import useDebounce from '../../../../hooks/useDebounce'

function SearchField(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('search')
  const [debouncedValue, value, setValue] = useDebounce(searchQuery, 500)

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setValue(e.target.value)
  }

  React.useEffect(() => {
    if (debouncedValue) {
      const params = [...searchParams]
        .reduce((paramsObj, [param, value]) => ({ ...paramsObj, [param]: value }), {})
      setSearchParams({ ...params, search: debouncedValue })
    } else {
      searchParams.delete('search')
      setSearchParams(searchParams)
    }
  }, [debouncedValue])

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <TextField
        id='outlined-search'
        label='Search'
        type='search'
        autoComplete='true'
        value={value ?? ''}
        onChange={handleChange}
      />
    </Stack>
  )
}

export default SearchField
