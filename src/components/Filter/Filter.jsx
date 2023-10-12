import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/FilterSlice';
import { filterContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // const handleInput = evt => {
  //   dispatch(filterContacts(evt.currentTarget.value));
  // };

  return (
    <div className="input-group input-group-sm mb-3">
      <span className="input-group-text" id="inputGroup-sizing-sm">
        Filter
      </span>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
