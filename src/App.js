import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setResult(null);
    if (value === "" || value === ",")
      return setError("Введите минимум два значения");
    const comma = /[,]+/g;
    const toArray = value.split(comma).map(Number);
    if (toArray.length < 2)
      return setError("Введите минимум два значения"), setValue("");
    if (toArray.some(isNaN))
      return setError("Введите численные значения"), setValue("");
    twoMinimums(toArray);
    setValue("");
    setError("");
  }

  function twoMinimums(array) {
    const res = array.sort((a, b) => a - b).slice(0, 2);
    setResult(res[0] + res[1]);
  }

  return (
    <div className="container row valign-wrapper">
      <form className="col s6 container center" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="values"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="values">Введите значения...</label>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Отправить
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
        {result && (
          <div className="row">
            <h6>Результат: {result}</h6>
          </div>
        )}
        {error && (
          <div className="row">
            <h6>{error}</h6>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
