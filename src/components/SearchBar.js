import React, { useState } from "react";

import styled from "styled-components";

const Form = styled.form`
  border: 0.1rem solid gray;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.3rem;
    margin-top: 0.5rem;
    text-align: center;
  }
`;

const SearchBar = ({ handleSubmit }) => {
  const [term, setTerm] = useState("");

  const handleInput = (e) => {
    const { value } = e.target;
    setTerm(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(term);
  }
  
  return (
    <Form onSubmit={onSubmit}>
      <label>Image Search</label>
      <input type="text" onChange={handleInput} value={term} />
    </Form>
  );
};

export default SearchBar;
