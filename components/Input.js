const InputComponent = ({setCity}) => {
  return (
    <div className="input_flex">
      <p>Your city</p>
      <input type="text" placeholder="London" onChange={(e) => {setCity(e.target.value)}}></input>
    </div>
  )
}

export default InputComponent