
const InputComp = ({onChange,value}) =>{
    return(
        <>
        <input
       type="text"
       placeholder="Enter city name"
       value={value}
       onChange={onChange}
        />
        </>
    )
}

export default InputComp