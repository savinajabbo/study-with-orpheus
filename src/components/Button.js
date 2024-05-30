import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.variant === 'primary' ? '#162A2C' : '#5E6C5B'}; 
  color: #fff; 
  padding: ${props => props.size === 'small' ? '5px 10px' : '10px 20px'};
  font-size: 1em; 
  border: 2px solid transparent;
  cursor: pointer; 
  color: white;
  border-radius: 12px;
  padding: 15px;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${props => props.variant === 'primary' ? '#F4EFE6' : '#F4EFE6'};
    color: ${props => props.variant === 'primary' ? '#162A2C' : '#162A2C'};;
    border: 2px solid ${props => props.variant === 'primary' ? '#162A2C' : '#5E6C5B'};
  }
`;

const Button = ({ type, variant, className, id, onClick, children, size, to }) => {
  return (
    <Link to={to}>
        <StyledButton
        type={type ? type : "button"}
        variant={variant}
        className={className}
        id={id}
        onClick={onClick}
        size={size}
        >
        {children}
        </StyledButton>
    </Link>
  );
};

export default Button;
