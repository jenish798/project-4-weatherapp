
const InputComp = ({onChange,value}) =>{
    return(
        <>
        <input
        className="inputcomp"
       type="text"
       placeholder="Enter city name"
       value={value}
       onChange={onChange}
        />
        </>
    )
}

export default InputComp