/* eslint-disable @typescript-eslint/promise-function-async */
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import SuspenseWrapper from '../../components/SuspenseWrapper'
import FavoriteArtworks from '../pages/FavoriteArtworks'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SuspenseWrapper component='HomePage' />
  },
  {
    path: 'artwork/:id',
    element: <SuspenseWrapper component='Artwork' />
  },
  {
    path: '/favorite-artworks',
    element: <FavoriteArtworks />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
