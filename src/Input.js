import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 15px;
  padding: 3px;
`;

export default function InputText({ value, placeholder, onChange, type }) {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  );
}
