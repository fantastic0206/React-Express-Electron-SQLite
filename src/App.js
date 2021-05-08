import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTestData } from "./actions/test";

function App() {
  const dispatch = useDispatch();

  const [label, setLabel] = useState("");

  const { testData } = useSelector((state) => state.testData);
  console.log(testData);

  const labelData = () => {
    dispatch(getTestData());
  };

  useEffect(() => {
    if (testData.length !== 0) {
      testData.map((item) => {
        if (item.email === "admin@example.com") setLabel(item.name);
      });
    }
  }, [testData]);

  return (
    <div>
      <button onClick={labelData}>submit</button>
      {label && <span>{label}</span>}
    </div>
  );
}

export default App;
