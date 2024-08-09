import React from "react"
import InputComp from "../../components/input/input"
import ButtonComp from "../../components/button/button"
import string from "../../utils"

const Home = ({placholdercity}) =>{
    const {find} = string
    return(
        <>
        <InputComp placeholder={placholdercity}/>
        <ButtonComp name={find}/>
        </>
    )
}

export default Home