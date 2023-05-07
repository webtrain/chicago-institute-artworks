import { useEffect, useState } from 'react'

type useDebounceHookRetrunType = [
  string | null,
  string | null,
  React.Dispatch<React.SetStateAction<string | null>>
]

function useDebounce(initialValue: string | null, time: number): useDebounceHookRetrunType {
  const [value, setValue] = useState(initialValue)
  const [debouncedValue, setDebouncedValue] = useState(initialValue)

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value)
    }, time)
    return () => {
      clearTimeout(debounce)
    }
  }, [value, time])

  return [debouncedValue, value, setValue]
}

export default useDebounce
