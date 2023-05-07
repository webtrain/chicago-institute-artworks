import React from 'react'

type useLocalStorageReturnType = readonly [
  any,
  (value?: string) => void,
  (value: string) => void
]

function useLocalStorage(key: string, initialValue?: string): useLocalStorageReturnType {
  const [storedValue, setStoredValue] = React.useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)

      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value?: string): void => {
    try {
      setStoredValue(value)

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const removeValue = (value: string): void => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(value)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue, removeValue] as const
}

export default useLocalStorage
