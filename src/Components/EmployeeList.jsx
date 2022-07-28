import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeesList = () => {
  const [employees, setEmplooyes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("http://localhost:8080/employee").then((d) =>
      d.json()
    );
    setEmplooyes(data);
    console.log(data);
  };

  return (
    <div className="emplooye">
      {employees.map((e) => (
        <div key={e.id}>
          <Link to={`/employees/${e.id}`}>
            <img src={e.image} alt="" />
            <div>{e.employee_name}</div>
            <div>{e.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
