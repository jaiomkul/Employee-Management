import { useState, useEffect } from "react";

export const Home = () => {
  const [det, setDet] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("http://localhost:8080/employee").then((d) =>
      d.json()
    );
    setDet(data);
    console.log(data);
  };

  return (
    <div>
      <p>Welcome to Home</p>
      <p>Total Emplooyes:{det.length}</p>
      <p>Terminater Emplooyes:{det.length}</p>
      <p>Terminater Promoted:</p>
      <p>Total New Emplooyes:</p>
    </div>
  );
};
