import { useCallback, useEffect, useRef, useState } from "react"



export const useFetch = (url , _option) =>{
       const [data , setData] = useState(null);
       const [isPending , setIsPending] = useState(false);
       const [error , setError] = useState(null)

       const options = useRef(_option).current
       const fetchData = useCallback( async()=>{
              setIsPending(true);
              const controller = new AbortController()
              try{
                     const response = await fetch(url ,{signal:controller.signal});
                     if(!response.ok){
                            throw new Error(response.statusText)
                     }
                     const json = await response.json()

                     setIsPending(false)
                     setData(json)
                     setError(null)

              } catch(err){
                     if(err.name === "AbortError"){
                            console.log('the fetch was aborted...')
                     }else{
                            setIsPending(false);
                            setError(`could'nt fetch data .. .`)
                            console.log(err.message)
                     }
              }
              return () =>{
                     controller.abort()
              }

       },[url , options])

       useEffect(()=>{
              fetchData()
       },[fetchData])
       return {data , isPending , error}

}