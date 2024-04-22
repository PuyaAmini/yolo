import React, { useCallback, useEffect, useState } from 'react'

export default function useFetch(url) {
       const [data , setData] = useState(null)
       const [isPending , setIsPending ] = useState(false)
       const [error , setError] = useState(null)

       const fetchData = useCallback(async() => {
              setIsPending(true) 
              const controller = new AbortController()
              try{
                     const res = await fetch(url ,{signal:controller.signal});

                     if(!res.ok){
                            throw new Error(res.statusText)
                     }

                     const json = await res.json();
                     setData(json)

                     setIsPending(false)
                     setError(null)
              } catch (err) {
                     if(err.name === "AbortError"){
                            console.log('fetch aborted')
                     } else {
                            setIsPending(false)
                            setError('could not fetch ')
                            console.log(err.message)
                     }
              }
       } , [url])
       useEffect(() => {
              fetchData()
       } , [fetchData])
  return {data , isPending , error}
}
