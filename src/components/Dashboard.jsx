import {StrictMode}from "react"
import App from "../App"
import Card from "./card"

function Dashboard({name,occ,nameChange}){
    return(
        <Card fullName={name} occ={occ} nameChange={nameChange}/>
    )
}

export default Dashboard