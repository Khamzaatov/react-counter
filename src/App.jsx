import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1)
  };

  const handleDecrease = () => {
    setCounter(counter - 1)
  };

  const handleReset = () => {
    setCounter(0)
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="bg-light text-center p-2 display-6 mb-2">
            Pro <b>Counter</b>
          </div>
          <div className="display-1 text-center my-5 py-5">{counter}</div>
          <div className="row">
            <div className="col">
              <button
                className="btn btn-primary w-100"
                onClick={handleIncrease}
              >
                Increase
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-success w-100"
                onClick={handleDecrease}
              >
                Decrease
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-danger w-100"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;