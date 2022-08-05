import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Filter = ({ value, onChange }) => (
  <Lable>
    find contacts by name
    <Input type="text" name="filter" value={value} onChange={onChange} />
  </Lable>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const Lable = styled.label``;

const Input = styled.input`
  margin-left: 10px;
`;

export default Filter;
