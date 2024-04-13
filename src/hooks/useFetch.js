import { useCallback, useEffect, useState } from "react"

// always hook file name start by 'use'
export const useFetch = (url) =>{
       
       const [data , setData] = useState(null) //meaning false
       const [isPending , setIsPending] = useState(false) //loading var


       const fetchData = useCallback (async() =>{
              setIsPending(true)
              const response = await fetch(url);
              const json = await response.json();
              setData(json)
              setIsPending(false)
       } , [url])
       useEffect(() => {
              fetchData()
       } , [fetchData])
       return {data , isPending}
}