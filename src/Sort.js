import { useState } from 'react';
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const SORT_KEYS = {
    LAST_NAME: "LAST_NAME",
    FIRST_NAME: "FIRST_NAME",
    DATE_HIRED: "DATE_HIRED",
    DATE_OF_BIRTH: "DATE_OF_BIRTH"
  };
  const DIRECTION = {
    ASCENDING: "ASCENDING",
    DESCENDING: "DESCENDING"
  };
  
  export default function Sort({ employees, onChange }) {
    const radios = [
      { name: "Last Name", value: SORT_KEYS.LAST_NAME },
      { name: "First Name", value: SORT_KEYS.FIRST_NAME },
      { name: "Date Hired", value: SORT_KEYS.DATE_HIRED },
      { name: "Date of Birth", value: SORT_KEYS.DATE_OF_BIRTH }
    ];

    const [radioValue, setRadioValue] = useState(null);
  const [direction, setDirection] = useState(DIRECTION.ASCENDING);
  const sortEmployees = (sortKey, sortDirection = direction) => {
    const sortFuncs = {
      [SORT_KEYS.LAST_NAME]: () => onChange([...employees.sort((emp1, emp2) =>
        sortDirection === DIRECTION.ASCENDING ? (emp1.name.last > emp2.name.last) : (emp1.name.last < emp2.name.last))]),
      [SORT_KEYS.FIRST_NAME]: () => onChange([...employees.sort((emp1, emp2) =>
        sortDirection === DIRECTION.ASCENDING ? (emp1.name.first > emp2.name.first) : (emp1.name.first < emp2.name.first))]),
      [SORT_KEYS.DATE_HIRED]: () => onChange([...employees.sort((emp1, emp2) =>
        sortDirection === DIRECTION.ASCENDING ? (new Date(emp1.registered.date) > new Date(emp2.registered.date)) :
        (new Date(emp1.registered.date) < new Date(emp2.registered.date)))]),
      [SORT_KEYS.DATE_OF_BIRTH]: () => onChange([...employees.sort((emp1, emp2) =>
        sortDirection === DIRECTION.ASCENDING ? (new Date(emp1.dob.date) > new Date(emp2.dob.date)) :
        (new Date(emp1.dob.date) < new Date(emp2.dob.date)))])
    };

    setDirection(sortDirection);
    setRadioValue(sortKey);
    sortFuncs[sortKey]();
  };

  return (
    <>
      <h4>Sort by:</h4>
      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="primary"
            name="radio"
            value={radio.value}
            style={{ marginLeft: 5, marginRight: 5 }}
            checked={radioValue === radio.value}
            onChange={event => sortEmployees(event.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      {radioValue && (
        <div style={{ marginTop: 5 }}>
          <ButtonGroup toggle>
            <ToggleButton
              type="radio"
              variant="secondary"
              name="radio"
              value={DIRECTION.ASCENDING}
              style={{ marginLeft: 5, marginRight: 5 }}
              checked={direction === DIRECTION.ASCENDING}
              onChange={event => sortEmployees(radioValue, event.currentTarget.value)}
            >
              Ascending
            </ToggleButton>
            <ToggleButton
              type="radio"
              variant="secondary"
              name="radio"
              value={DIRECTION.DESCENDING}
              style={{ marginLeft: 5, marginRight: 5 }}
              checked={direction === DIRECTION.DESCENDING}
              onChange={event => sortEmployees(radioValue, event.currentTarget.value)}
            >
              Descending
            </ToggleButton>
          </ButtonGroup>
        </div>
      )}
    </>
  );
}