import React from 'react';
import styled from '@emotion/styled'

const StyledButton = styled.button`
  background: ${({isSecondary}) => isSecondary ? '#D50000' : '#304FFE'};
  color: ${({isSecondary}) => isSecondary ? '#FFEBEE' : '#E8EAF6'};
  border: 1px solid ${({isSecondary}) => isSecondary ? '#D50000' : '#304FFE'};
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({isSecondary}) => isSecondary ? '#FFEBEE' : '#E8EAF6'};
    color: ${({isSecondary}) => isSecondary ? '#D50000' : '#304FFE'};
  }
`

// eslint-disable-next-line react/prop-types
export const Button = ({ text, onClick, isSecondary = false }) => {
  return (
    <StyledButton onClick={onClick} isSecondary={isSecondary}>{text}</StyledButton>
  )
}
