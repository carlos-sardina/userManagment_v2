/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
  border: 1px solid #cfd8dc;
  border-radius: 5px;
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const Input = ({ placeholder }) => {
  return (
    <StyledInput type="text" placeholder={placeholder} />
  )
}
