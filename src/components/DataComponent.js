import { useState, useEffect } from "react";

function DataComponent() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => resolve("Loaded Data"), 1000);
    });

    fetchData.then(setData);
  }, []);

  return <div>{data}</div>;
}

export default DataComponent;
