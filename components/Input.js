import ErrorInput from './ErrorInput';

const InputComponent = ({ setCity, value, setValue, error }) => {
  return (
    <>
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
      <div>{!!error && <ErrorInput error={error} />}</div>
    </>
  );
};

export default InputComponent;
