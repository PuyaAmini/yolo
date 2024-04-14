import { useCallback, useEffect, useState } from "react"

export const useFetch = (url) => {
       const [data, setData] = useState(null) // داده‌های دریافتی
       const [isPending, setIsPending] = useState(false) // وضعیت در حال بارگیری
       const [error, setError] = useState(null) // خطاها

       const fetchData = useCallback(async () => {
              setIsPending(true) // در حال بارگیری
              const controller = new AbortController() // ایجاد کنترل‌کننده برای متوقف کردن درخواست
              try {
                     const response = await fetch(url , {signal: controller.signal}); // ارسال درخواست به سرور
                     console.log(response)
                     if (!response.ok){
                            throw new Error(response.statusText) // اگر پاسخ ناموفق بود، خطا را پرتاب کن
                     }
                     const json = await response.json(); // تبدیل پاسخ به JSON
                     
                     setData(json) // ذخیره داده‌های دریافتی
                     setIsPending(false) // پایان بارگیری
                     setError(null) // حذف خطا
              } catch (err) {
                     if(err.name === "AbortError"){
                            console.log('the fetch was aborted...') // اگر درخواست متوقف شد
                     }else{
                            setIsPending(false) // پایان بارگیری
                            setError('could not fetch data') // نمایش خطای عدم بارگیری داده
                            console.log(err.message) // نمایش پیغام خطا
                     }
              }
              // تابع پاک‌سازی: در صورت حذف کامپوننت React از DOM، درخواست fetch متوقف می‌شود
              return () => {
                     controller.abort()
              }
       }, [url])

       useEffect(() => {
              fetchData() // فراخوانی تابع بارگیری داده
              // تابع پاک‌سازی فراخوانی می‌شود هنگامی که کامپوننت unmount می‌شود
       }, [fetchData])

       return { data, isPending , error} // بازگردانی داده‌ها، وضعیت بارگیری و خطا
}
