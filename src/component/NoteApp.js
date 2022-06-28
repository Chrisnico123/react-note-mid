import React from "react";
import InputData from "./inputData";
import { getData } from "../data/data";
import ListData from "./ListData";
import SearchNote from "./SearchNote";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getData(),
      dataBackup: getData(),
    };
    this.onChangeAddNote = this.onChangeAddNote.bind(this);
    this.onEventDelete = this.onEventDelete.bind(this);
    this.onChangeArchive = this.onChangeArchive.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onEventDelete(id) {
    const data = this.state.data.filter((note) => note.id !== id);
    const dataBackup = this.state.dataBackup.filter((note) => note.id !== id);
    this.setState({ data });
    this.setState({ dataBackup: dataBackup });
  }

  onChangeArchive(id) {
    const data = this.state.data.find((note) => note.id === id);
    const dataBackup = this.state.dataBackup.find((note) => note.id === id);
    data.archived = !data.archived;
    dataBackup.archived = data.archived;
    this.setState((prev) => {
      return {
        data: [...prev.data],
        dataBackup: [...prev.dataBackup],
      };
    });
  }

  onSearch(title) {
    this.setState((prev) => {
      return {
        ...prev,
        data: this.state.dataBackup,
      };
    });
    this.setState((prev) => {
      return {
        ...prev,
        data: prev.data.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())),
      };
    });
  }

  onChangeAddNote({ title, body }) {
    this.setState((prev) => {
      return {
        data: [
          ...prev.data,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
        dataBackup: [
          ...prev.data,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="container">
        <SearchNote onSearch={this.onSearch} />
        <InputData addNote={this.onChangeAddNote} />
        <ListData data={this.state.data} onDelete={this.onEventDelete} onArchive={this.onChangeArchive} />
      </div>
    );
  }
}

export default NoteApp;
