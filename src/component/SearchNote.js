import React from "react";

export default function SearchNote({ onSearch }) {
  return (
    <div className="input">
      <input autoCorrect="off" className="input-data fix" type="text" placeholder="Search" onChange={(event) => onSearch(event.target.value)} />
    </div>
  );
}
