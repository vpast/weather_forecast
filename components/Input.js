const InputComponent = ({ setCity, value, setValue }) => {
  return (
    <div className='inputFlex'>
      <p className='check'>Your city</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCity(value);
        }}
      >
        <input
          type='text'
          enterKeyHint='go'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='London'
        />
      </form>
    </div>
  );
};

export default InputComponent;
