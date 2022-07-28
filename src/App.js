import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { EmployeesList } from "./Components/EmployeeList";
import { Login } from "./Components/Login";
import { Logout } from "./Components/Logout";
import { EmployeeDetails } from "./Components/EmployeeDetails";
import { PrivateComponent } from "./Components/PrivateComponent";
import { Admin } from "./Components/Admin";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<EmployeesList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route
          path="/employees/:id"
          element={
            <PrivateComponent>
              <EmployeeDetails />
            </PrivateComponent>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <PrivateComponent>
              <Admin />
            </PrivateComponent>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
