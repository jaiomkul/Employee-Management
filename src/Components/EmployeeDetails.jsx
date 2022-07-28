import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(`http://localhost:8080/employee/${id}`).then((d) =>
      d.json()
    );
    setEmployee(data);
    console.log("Ddata", data);
  }

  const handleTerminate = () => {
    fetch(`http://localhost:8080/employee/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...employee, status: "terminated" }),
    })
      .then((response) => {
        getData();
        console.log(response.status);
        return response.json();
      })
      .then((data) => console.log(data));
  };

  return (
    <div className="detailData">
      <img src={employee.image} alt="" />
      <table style={{ width: "30%" }}>
        <tr>
          <th>Employee Name:</th>
          <td>{employee.employee_name}</td>
        </tr>
        <tr>
          <th>Employee ID:</th>
          <td>{employee.employee_id}</td>
        </tr>
        <tr>
          <th>Titile:</th>
          <td>{employee.title}</td>
        </tr>
        <tr>
          <th>Salary:</th>
          <td>{employee.salary}</td>
        </tr>
        <tr>
          <th>User Name:</th>
          <td>{employee.username}</td>
        </tr>
        <tr>
          <th>Password:</th>
          <td>{employee.password}</td>
        </tr>
        <tr>
          <th>Tasks:</th>
          <td>{employee.tasks}</td>
        </tr>
        <tr>
          <th>Team::</th>
          <td>{employee.team}</td>
        </tr>
        <tr>
          <th>Status:</th>
          <td>
            {employee.status === "working" ? (
              <button
                onClick={() => {
                  handleTerminate();
                }}
              >
                TERMINATE
              </button>
            ) : (
              <div>Terminated</div>
            )}
          </td>
        </tr>
      </table>
    </div>
  );
};
