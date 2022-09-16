import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailActive from "./DetailActive";

const ListActive = ({ data, onArchive, onDelete }) => {
  let list = data.filter((note) => note.archived === false);
  return (
    <div>
      {list.map((note) => (
        <Router>
          <Routes>
            <Route path={`active/${note.id}`} element={<DetailActive key={note.id} id={note.id} {...note} title={note.title} body={note.body} createdAt={note.createdAt} onArchive={onArchive} onDelete={onDelete} />} />
          </Routes>
        </Router>
      ))}
    </div>
  );
};

export default ListActive;
