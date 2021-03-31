import { Table } from "react-bootstrap";
import dateformat from "dateformat";

export default function EmployeeTable({ employees }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Date Hired</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>
              <img src={employee.picture.thumbnail} alt={employee.name} />
            </td>
            <td>{employee.id.value}</td>
            <td>{employee.name.last}</td>
            <td>{employee.name.first}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{dateformat(new Date(employee.registered.date), "mmmm dS, yyyy")}</td>
            <td>{dateformat(new Date(employee.dob.date), "mmmm dS, yyyy")}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
