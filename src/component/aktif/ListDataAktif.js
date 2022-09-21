import React from "react";
import ListAktif from "./ListAktif";
import { showFormattedDate } from "../../data/data";
import { PropTypes } from "prop-types";

function ListDataAktif({ data }) {
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
        <ListAktif id={note.id} key={note.id} title={note.title} body={note.body} createdAt={showFormattedDate(note.createdAt)} />
      ))}
    </div>
  );
}

ListDataAktif.propTypes = {
  data: PropTypes.array,
};
export default ListDataAktif;
