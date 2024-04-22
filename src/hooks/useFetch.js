import React, { useCallback, useEffect, useState } from 'react'

export default function useFetch(url) {
       const [data , setData] = useState(null)
       const [isPending , setIsPending ] = useState(false)
       const fetchData = useCallback(async() => {
              setIsPending(true)
              const res = await fetch(url);
              const json = await res.json();
              setData(json)
              setIsPending(false)
       } , [url])
       useEffect(() => {
              fetchData()
       } , [fetchData])
  return {data , isPending}
}
