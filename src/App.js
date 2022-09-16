import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main">
        <p> {myState} </p>
        <div>
          <button onClick={() => dispatch(incNumber(5))}>Increment</button>
          <button onClick={() => dispatch(decNumber())}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App;