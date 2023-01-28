/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

const useFetch = (fn = () => {}, params, observable = []) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [refreshCounter, setRefreshCounter] = useState(0)

  const refresh = () => {
    setRefreshCounter(refreshCounter + 1)
  }

  useEffect(() => {
    setIsLoading(true)
    fn(params)
      .then((data) => {
        setResponse(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      })
  }, [refreshCounter, ...observable])

  return { response, error, isLoading, refresh }
}

export default useFetch
