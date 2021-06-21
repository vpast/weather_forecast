const ErrorInput = (data) => {
  return(
    <>
      {(data.data == null)
        ? <div></div>
        : <p>Wrong input, try another please.</p>
      }
    </>
  )
}

export default ErrorInput