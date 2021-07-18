const ErrorInput = (props) => {
  const {error = "Something wrong."} = props
  return (
    <div className="weatherError">
      {error}
    </div>
  );
};

export default ErrorInput;
