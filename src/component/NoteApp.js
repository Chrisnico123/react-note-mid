import React from "react";
import InputData from "./input/inputData";
import { getData } from "../data/data";
import SearchNote from "./SearchNote";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListDataAktif from "./aktif/ListDataAktif";
import ListDataArsip from "./arsip/ListDataArsip";
import ListDetail from "./arsip/ListDetail";
import ListActive from "./aktif/ListActive";

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
        <Router>
          <div className="nav">
            <Link to="/">
              <button className="button etc-btn">Note Active</button>
            </Link>
            <Link to="/archive">
              <button className="button etc-btn">Note Archive</button>
            </Link>
            <Link to="/input">
              <button className="button etc-btn">Input</button>
            </Link>
          </div>
          <ListActive data={this.state.data} {...this.state.data} onDelete={this.onEventDelete} onArchive={this.onChangeArchive} />
          <ListDetail data={this.state.data} {...this.state.data} onDelete={this.onEventDelete} onArchive={this.onChangeArchive} />
          <Routes>
            <Route path="/input" element={<InputData addNote={this.onChangeAddNote} />} />
            {this.state.data.map((note) => (
              <Route path={`archive/${note.id}`} key={note.id.toString()} element={<></>} />
            ))}
            {this.state.data.map((note) => (
              <Route path={`active/${note.id}`} key={note.id.toString()} element={<></>} />
            ))}
            <Route
              path="/"
              element={
                <div>
                  <SearchNote onSearch={this.onSearch} />
                  <ListDataAktif data={this.state.data} {...this.state.data} onDelete={this.onEventDelete} onArchive={this.onChangeArchive} />
                </div>
              }
            />
            <Route
              path="/archive"
              element={
                <div>
                  <SearchNote onSearch={this.onSearch} />
                  <ListDataArsip data={this.state.data} {...this.state.data} onDelete={this.onEventDelete} onArchive={this.onChangeArchive} />
                </div>
              }
            />
            <Route
              path="*"
              element={
                <center>
                  <h1>404 NOT FOUND!!!</h1>
                </center>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default NoteApp;
