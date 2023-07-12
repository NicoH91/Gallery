import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px;
  width: 300px;
  position: relative;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
  flex: 1;
  font-size: 1.2rem;
  padding: 3px;
`;

const SearchIcon = styled(BsSearch)`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  color:red;
`;

export const Input = () => {
    return (
        <InputContainer>
            <SearchInput type="text" placeholder="Search" />
            <SearchIcon />
        </InputContainer>
    );
};
