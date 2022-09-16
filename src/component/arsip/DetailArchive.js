import React from "react";

const DetailArchive = ({ id, onArchive, onDelete, title, body, createdAt }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{createdAt}</p>
      <div class="body">{body}</div>
      <a href="/archive">
        <button className="button delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      </a>
      <a href="/archive">
        <button className="button etc-btn" onClick={() => onArchive(id)}>
          UnArchive
        </button>
      </a>
    </div>
  );
};

export default DetailArchive;
