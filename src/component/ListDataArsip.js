import React from "react";
import ListArchive from "./ListArchive";
import { showFormattedDate } from "./../data/data";

function ListDataArsip({ data, onDelete, onArchive }) {
  let list = data.filter((note) => note.archived === true);
  if (list.length === 0) {
    return (
      <div className="notes-list__empty-message">
        <p>No Notes Here !!!</p>
      </div>
    );
  }
  return (
    <div className="list-data">
      {list.map((note) => (
        <ListArchive key={note.id} id={note.id} {...note} onArchive={onArchive} onDelete={onDelete} createdAt={showFormattedDate(note.createdAt)} />
      ))}
    </div>
  );
}
export default ListDataArsip;
