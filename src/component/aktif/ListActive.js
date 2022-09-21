import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailActive from "./DetailActive";
import { PropTypes } from "prop-types";

const ListActive = ({ data, onArchive, onDelete }) => {
  let list = data.filter((note) => note.archived === false);
  return (
    <div>
      <Routes>
        {list.map((note) => (
          <Route
            path={`active/${note.id}`}
            key={note.id.toString()}
            element={<DetailActive key={note.id.toString()} id={note.id} {...note} title={note.title} body={note.body} createdAt={note.createdAt} onArchive={onArchive} onDelete={onDelete} />}
          />
        ))}
      </Routes>
    </div>
  );
};

ListActive.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
};

export default ListActive;
