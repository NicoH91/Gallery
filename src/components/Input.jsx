// Componente Input
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px;
  width: 300px;
  position: relative;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid blue;
  flex: 1;
  font-size: 1.2rem;
  padding: 3px;
`;

const SearchButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const SearchIcon = styled(BsSearch)`
  width: 16px;
  height: 16px;
  color: red;
`;

export const Input = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
        const text = event.target.value;
        setSearchQuery(text);
        onSearch(text);
    };

    return (
        <InputContainer>
            <SearchInput type="text" placeholder="Search" value={searchQuery} onChange={handleInputChange} />
            <SearchButton>
                <SearchIcon />
            </SearchButton>
        </InputContainer>
    );
};
