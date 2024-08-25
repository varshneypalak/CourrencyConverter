import { useEffect ,useState } from "react";



function useCurencyInfo (currency){
    const [data ,setdata] = useState({})
    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res)=>res.json()).then((rse)=>setdata(rse[currency]))
        console.log(data)
    },[currency])
    console.log(data)
    return data;
}

export default useCurencyInfo;
