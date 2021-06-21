const ErrorInput = (data) => {
  return (
    <>
      {data.data == null ? (
        <p>lol</p>
      ) : (
        <p>Wrong input, try another please.</p>
      )}
    </>
  );
};

export default ErrorInput;
