import React from "react";
import { showFormattedDate } from "./../data/data";
function ListAktif({ id, title, body, createdAt, onDelete, onArchive }) {
  return (
    <div class="listcard">
      <h4>{title}</h4>
      <p>{showFormattedDate(createdAt)}</p>
      <div class="body">{body}</div>
      <div class="btn">
        <button className="button delete" onClick={() => onDelete(id)}>
          Delete
        </button>
        <button className="button etc-btn" onClick={() => onArchive(id)}>
          Archive
        </button>
      </div>
    </div>
  );
}

export default ListAktif;
