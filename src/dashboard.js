import { useState } from "react";
import EmployeeTable from "./EmployeeTable";
import Sort from "./Sort";
import Filter from "./Filter";

export default function Dashboard({ employees }) {
    const [selectedEmployees, setSelectedEmployees] = useState(employees);
  
    return (
      <>
        <h1>Employees</h1>
        <Sort employees={selectedEmployees} onChange={setSelectedEmployees} />
        <Filter employees={employees} onChange={setSelectedEmployees} />
        <EmployeeTable employees={selectedEmployees} />
      </>
    );
  }