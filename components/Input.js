import { useState } from "react";

const InputComponent = ({ setCity }) => {
  const [val, setVal] = useState("");

  return (
    <div className="inputFlex">
      <p className="check">Your city</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCity(val);
        }}
      >
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="London"
        />
      </form>
    </div>
  );
};

export default InputComponent;
