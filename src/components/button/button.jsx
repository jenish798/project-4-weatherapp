import React from "react"

const ButtonComp = ({name,onClick, disabled, loading}) =>{
    return(
        <>
        {/* <button onClick={onClick}>{name}</button> */}
        <button type="submit" onClick={onClick} disabled={disabled}>
      {loading ? "Loading..." : "Get Weather"} {name}
    </button>
        </>
    )
}

export default ButtonComp