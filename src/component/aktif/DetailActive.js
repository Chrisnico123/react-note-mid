import React from "react";

const DetailActive = ({ id, onArchive, onDelete, title, body, createdAt }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{createdAt}</p>
      <div class="body">{body}</div>
      <a href="/">
        <button className="button delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      </a>
      <a href="/">
        <button className="button etc-btn" onClick={() => onArchive(id)}>
          Archive
        </button>
      </a>
    </div>
  );
};

export default DetailActive;
