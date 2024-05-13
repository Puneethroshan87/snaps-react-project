import { BrowserRouter, Route, Routes } from "react-router-dom"
import SecondPage from "./secondpage"
import SearchBar from "./input"
import { createContext, useState } from "react"



export const DataShare=createContext()

const MainPage=()=>{

    const [share,setShare]=useState()
    return(
<DataShare.Provider value={{share,setShare}}>
<BrowserRouter>
<Routes>

<Route path="/" Component={SearchBar}></Route>
<Route path="/SecondPage" Component={SecondPage}></Route>
</Routes>
</BrowserRouter>
</DataShare.Provider>


    )
}
export default MainPage