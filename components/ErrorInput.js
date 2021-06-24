const ErrorInput = (props) => {
  const {error = "Something wrong."} = props
  return (
    <div className="error">
      {error}
    </div>
  );
};

export default ErrorInput;
