
import { InputGroup, FormControl, Row, Col } from "react-bootstrap";

export default function Filter({ employees, onChange }) {
  return (
    <Row style={{ marginBottom: 5 }}>
      <Col md={4} />
      <Col md={4}>
        <h4>
          <label htmlFor="employee-filter-input">Filter Employees by Name:</label>
        </h4>
        <InputGroup>
          <FormControl
            id="employee-filter-input"
            onChange={event => onChange([...employees.filter(({ name: { first, last }}) =>
              first.toLowerCase().startsWith(event.target.value.toLowerCase()) ||
              last.toLowerCase().startsWith(event.target.value.toLowerCase()))])
            }
          />
        </InputGroup>
      </Col>
      <Col md={4} />
    </Row>
  )
}