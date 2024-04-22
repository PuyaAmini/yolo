import React, { useCallback, useEffect, useState } from 'react'

export default function useFetch(url) {
       const [data , setData] = useState(null)
       const fetchData = useCallback(async() => {
              const res = await fetch(url);
              const json = await res.json();
              setData(json)
       } , [url])
       useEffect(() => {
              fetchData()
       } , [fetchData])
  return {data}
}
