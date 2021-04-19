const InputComponent = ({setCity}) => {
  return (
    <div className="input_flex">
      <p>Your city</p>
      <input type="text" placeholder="London" onKeyPress={(e) => {
        if (e.key === 'Enter') {
          setCity(e.target.value)
        }
      }}></input>
    </div>
  )
}

export default InputComponent