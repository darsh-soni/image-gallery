import React, { useState } from "react";

const SearchBar = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="flex justify-center m-32">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-gray-700 py-2">
          <input
            onChange={e => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image...."
            aria-label="Full name"
          />
          <button
            onClick={onSubmit} className="flex-shrink-0 bg-gray-900 hover:bg-white hover:text-black border-black hover:border-black text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
