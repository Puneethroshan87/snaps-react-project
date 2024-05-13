import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import SecondPage from "./secondpage"
import { DataShare } from "./main"



const SearchBar=()=>{
   const{share,setShare}= useContext(DataShare)

    const navivate= useNavigate() // to navigate the pages 

    const [search,setSearch]=useState("") //

const onChangeHandler=(e)=>{
    setSearch(e.target.value) //setState to the value of the input (e.target.value)-t0 get the value of inpiut
    setShare(e.target.value)
}
const onSubmitHandler=(e)=>{  //to submit the value entered in the form   
    e.preventDefault()
   const main= search
   console.log(main)
   navivate("SecondPage") //to navigate to the search page
}

    return(
        <div>
        <h1>4K Snaps</h1>
    <h3>The internets source for visuals.</h3>
    <h3>Powered by creators everywhere.</h3>
   
<div className="formss">
<form onSubmit={onSubmitHandler}>
<input type="text" placeholder="Search Images"  value={search} onChange={onChangeHandler} style={{width:500 , height:43 ,fontSize:25}} ></input>
<button style={{height:48 , width:100 , fontSize:25}}>search</button>
</form>
</div>
</div>
    )
}
export default SearchBar