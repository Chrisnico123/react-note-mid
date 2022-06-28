import React from "react";
import ListAktif from "./ListAktif";
import { showFormattedDate } from "./../data/data";

function ListDataAktif({ data, onDelete, onArchive }) {
  const list = data.filter((note) => note.archived === false);
  if (list.length === 0) {
    return (
      <div className="notes-list__empty-message">
        <p>No Notes Here !!!</p>
      </div>
    );
  }
  return (
    <div className="list-data" id="aktif">
      {list.map((note) => (
        <ListAktif id={note.id} title={note.title} body={note.body} onArchive={onArchive} createdAt={showFormattedDate(note.createdAt)} onDelete={onDelete} />
      ))}
    </div>
  );
}
export default ListDataAktif;
