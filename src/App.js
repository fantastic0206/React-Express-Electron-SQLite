import React, { useState, useEffect } from "react";

import api from "./services/api";

function App() {
  const [label, setLabel] = useState("");
  const [data, setData] = useState([]);

  const labelData = () => {
    api.get("/api/test").then((result) => setData(result.data.data));
  };

  useEffect(() => {
    console.log(data);
    if (data.length !== 0) {
      data.map((item) => {
        if (item.email === "admin@example.com") setLabel(item.email);
      });
    }
  }, [data]);

  return (
    <div>
      <button onClick={labelData}>submit</button>
      {label && <span>{label}</span>}
    </div>
  );
}

export default App;
