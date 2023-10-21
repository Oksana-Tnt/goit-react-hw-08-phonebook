import { Input } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <form>
      <Input
        boxShadow="xl"
        p="6"
        rounded="md"
        bg="white"
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        id="inputGroup-sizing-sm"
        placeholder="search contact"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      ></Input>
    </form>
  );
};

export default Filter;
