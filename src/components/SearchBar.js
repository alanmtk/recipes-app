import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const submitSearch = useStoreActions((actions) => actions.submitSearch);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    submitSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb">
      <input type="text" value={query} onChange={({ target: { value } }) => setQuery(value)} />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
