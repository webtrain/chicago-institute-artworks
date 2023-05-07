import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers/rootReducer'
import type { ArtworkInstituteType } from '../lib/api/types/artworkInstituteType'

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})

export default store

export type RootState = ReturnType<typeof store.getState>

export interface RootArtworkState { artworkInstitute: ArtworkInstituteType }

export type AppDispatch = typeof store.dispatch
