import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function useFetch(url , _options) {
       const [data , setData] = useState(null)
       const [isPending , setIsPending ] = useState(false)
       const [error , setError] = useState(null)

       const options = useRef(_options)

       const fetchData = useCallback(async() => {
              console.log(options)
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
       } , [url , options])
       useEffect(() => {
              fetchData()
       } , [fetchData])
  return {data , isPending , error}
}
