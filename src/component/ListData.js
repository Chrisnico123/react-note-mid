import React from "react";
import ListDataAktif from "./ListDataAktif";
import ListDataArsip from "./ListDataArsip";

function ListData({ data, onDelete, onArchive, createdAt }) {
  return (
    <div class="">
      <div id="aktif">
        <h3>Note</h3>
        <ListDataAktif data={data} {...data} createdAt={createdAt} onDelete={onDelete} onArchive={onArchive} />
      </div>
      <div id="arsip">
        <h3>Data Archived</h3>
        <ListDataArsip data={data} {...data} createdAt={createdAt} onDelete={onDelete} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default ListData;
