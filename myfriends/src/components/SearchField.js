import React from 'react';

const SearchField = ({ filterFriends }) => {
  const handleChange = event => {
    let input = event.target.value.toLowerCase();
    filterFriends(input);
  };

  return (
    <div className="search-for-friends">
      <input
        autoFocus
        className="inputBox"
        onChange={handleChange}
        type="text"
        text="Search for friend"
        placeholder="Friend's Name"
      />
      <button onclick={handleChange}>Search</button>
    </div>
  );

}


export default SearchField;
