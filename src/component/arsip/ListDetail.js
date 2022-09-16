import React from "react";
import DetailArchive from "./DetailArchive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ListDetail = ({ data, onDelete, onArchive }) => {
  let list = data.filter((note) => note.archived === true);
  return (
    <div>
      {list.map((note) => (
        <Router>
          <Routes>
            <Route path={`archive/${note.id}`} element={<DetailArchive key={note.id} id={note.id} {...note} title={note.title} body={note.body} createdAt={note.createdAt} onArchive={onArchive} onDelete={onDelete} />} />
          </Routes>
        </Router>
      ))}
    </div>
  );
};

export default ListDetail;
