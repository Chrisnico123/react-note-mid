import React from "react";

class InputData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      max: 50,
    };
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmitData = this.onSubmitData.bind(this);
  }

  onChangeTitle(event) {
    this.setState((prev) => {
      while (event.target.value.length < this.state.max + 1) {
        return {
          ...prev,
          title: event.target.value,
        };
      }
    });
  }

  onChangeBody(event) {
    this.setState((prev) => {
      return {
        ...prev,
        body: event.target.value,
      };
    });
  }

  onSubmitData(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="input">
        <h1>Create A New Note</h1>
        <form onSubmit={this.onSubmitData}>
          <input autoCorrect="off" className="input-data" type="text" placeholder="Note title" value={this.state.title} onChange={this.onChangeTitle} required />
          <p>Character Left : {this.state.max - this.state.title.length}</p>
          <br />
          <textarea className="text-area" placeholder="Note ... " value={this.state.body} onChange={this.onChangeBody} required></textarea>
          <br />
          <button className="btn-create">Create</button>
        </form>
      </div>
    );
  }
}

export default InputData;
