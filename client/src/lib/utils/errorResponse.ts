import axios from 'axios'

export interface ErrorWithMessage {
  error: string
}

export const getErrorResponse = (error: unknown): ErrorWithMessage => {
  if (axios.isAxiosError(error)) {
    console.log('error message: ', error.message)
    return { error: error.message }
  } else {
    console.log('unexpected error: ', error)
    return { error: 'An unexpected error occurred' }
  }
}
