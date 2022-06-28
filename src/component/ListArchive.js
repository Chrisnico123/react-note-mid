import React from "react";

function ListArchive({ id, title, body, createdAt, onDelete, onArchive }) {
  return (
    <div class="listcard">
      <h4>{title}</h4>
      <p>{createdAt}</p>
      <div class="body">{body}</div>
      <div class="btn">
        <button className="button delete" onClick={() => onDelete(id)}>
          Delete
        </button>
        <button className="button etc-btn" onClick={() => onArchive(id)}>
          UnArchive
        </button>
      </div>
    </div>
  );
}

export default ListArchive;
