import { useDispatch as reduxUseDispatch, useSelector as reduxUseSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'

export const useDispatch: () => AppDispatch = reduxUseDispatch

export const useSelector: TypedUseSelectorHook<RootState> = reduxUseSelector
