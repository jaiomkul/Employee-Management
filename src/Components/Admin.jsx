import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext";
export const Admin = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    employee_name: "",
    employee_id: "",
    title: "",
    salary: "",
    image: "",
    username: "",
    password: "",
    tasks: "",
    status: "",
    team: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/employee`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("Data added successfully");
  };

  return (
    <form className="createEmployee" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Employee Name"
        name="employee_name"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Employee id"
        name="employee_id"
      />
      <select onChange={handleChange} name="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        onChange={handleChange}
        type="number"
        placeholder="Salary"
        name="salary"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Image"
        name="image"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="User Name"
        name="username"
      />
      <input
        onChange={handleChange}
        type="password"
        placeholder="Password"
        name="password"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
      />
      <select onChange={handleChange} name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select onChange={handleChange} name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input
        onClick={() => {
          handleAuth(true);
          navigate("/", { replace: false });
        }}
        className="createUser"
        type="submit"
        value={"submit"}
      />
    </form>
  );
};
