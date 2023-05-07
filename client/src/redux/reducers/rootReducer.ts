import { combineReducers } from '@reduxjs/toolkit'
import artworkInstituteReducer from '../reducers/artworkSlice'

const rootReducer = combineReducers({
  artworkInstitute: artworkInstituteReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
