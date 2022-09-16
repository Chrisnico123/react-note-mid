import React from "react";
import { showFormattedDate } from "../../data/data";
function ListAktif({ id, title, body, createdAt }) {
  const path = `/active/${id}`;

  return (
    <div class="listcard">
      <h4>{title}</h4>
      <p>{showFormattedDate(createdAt)}</p>
      <div class="body">{body}</div>
      <div class="btn">
        <a href={path}>
          <button className="button delete">Detail</button>
        </a>
      </div>
    </div>
  );
}

export default ListAktif;
