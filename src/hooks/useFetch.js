import { useCallback, useEffect, useState } from "react"

// always hook file name start by 'use'
export const useFetch = (url) =>{
       
       const [data , setData] = useState(null) //meaning false
       const fetchData = useCallback (async() =>{
              const response = await fetch(url);
              const json = await response.json();
              setData(json)
       } , [url])
       useEffect(() => {
              fetchData()
       } , [fetchData])
       return {data}
}