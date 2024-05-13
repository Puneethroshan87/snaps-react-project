import { useContext, useEffect, useState } from "react"
import { DataShare } from "./main"
import axios from "axios"





const SecondPage=()=>{

   const {share} =  useContext(DataShare);
   const [cut,setcut]=useState([])
   useEffect(()=>{
    result()
   },[])
 const result =async()=>{
    const response=await axios.get(`https://pixabay.com/api/?key=7685538-ea988db1f25ef51f3d2df1490&q=${share}&image_type=photo`)
    console.log(response.data.hits)
    setcut(response.data.hits)
 }
 console.log(share);

    return(
        <>
   {
    cut.map((val)=>{
        return(
            <>
            <img src={val.largeImageURL} width="600px" style={{margin:10}} alt="hii"  className="img"></img>
            </>
        )
    })
   }
        

        </>
    )
}
export default SecondPage