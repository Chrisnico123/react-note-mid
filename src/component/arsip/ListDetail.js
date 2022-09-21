import React from "react";
import DetailArchive from "./DetailArchive";
import { Route, Routes } from "react-router-dom";
import { PropTypes } from "prop-types";

const ListDetail = ({ data, onDelete, onArchive }) => {
  let list = data.filter((note) => note.archived === true);
  return (
    <div>
      <Routes>
        {list.map((note) => (
          <Route
            path={`archive/${note.id}`}
            key={note.id.toString()}
            element={<DetailArchive key={note.id.toString()} id={note.id} {...note} title={note.title} body={note.body} createdAt={note.createdAt} onArchive={onArchive} onDelete={onDelete} />}
          />
        ))}
      </Routes>
    </div>
  );
};

ListDetail.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
};

export default ListDetail;
