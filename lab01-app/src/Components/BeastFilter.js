import React, { useState } from "react";
import { Form } from "react-bootstrap";

const BeastFilter = ({ beasts, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setSelectedFilter(selectedFilter);
    onFilterChange(selectedFilter);
  };

  const hornFilters = [
    { label: "Any", value: "" },
    { label: "1 horn", value: "1" },
    { label: "2 horns", value: "2" },
    { label: "3 horns", value: "3" },
    { label: "100 horns", value: "100" },
  ];

  return (
    <Form>
      <Form.Group controlId="beastFilterSelect">
        <Form.Label>Filter by number of horns:</Form.Label>
        <Form.Control as="select" onChange={handleFilterChange}>
          {hornFilters.map(({ label, value }) => (
            <option key={value} value={value} selected={selectedFilter === value}>
              {label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default BeastFilter;
