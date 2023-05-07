import React from 'react'
import { useDispatch } from './reduxHooks'
import { fetchArtworks, searchForArtworks } from '../redux/thunks/artworkThunks'
import useArtwork from './useArtWork'

interface UseArtworkInitProps {
  page: string | null
  perPage: string | null
  search: string | null
}

function useArtworkInit({ page, perPage, search }: UseArtworkInitProps): null {
  const dispatch = useDispatch()
  const { pagination } = useArtwork()

  const pageLimits = [25, 50, 100]

  React.useEffect(() => {
    if (
      page && perPage && pagination.total_pages && pagination.limit &&
      page > pagination.total_pages &&
      (perPage > pagination.limit || !pageLimits.includes(Number(perPage)))
    ) return

    if (!search) {
      void (async () => {
        await dispatch(fetchArtworks({ page, perPage }))
      })()
    } else {
      void (async () => {
        await dispatch(searchForArtworks({ searchText: search, page, perPage }))
      })()
    }
  }, [page, perPage, search])

  return null
}

export default useArtworkInit
