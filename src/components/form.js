import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      isDone: false,
      id: 0
    };
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          required
          onChange={e => this.setState({ task: e.target.value })}
          value={this.state.task}
        />
        <input type="submit" />
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onInput(this.state.task, this.state.isDone, this.state.id);
    this.setState({
      task: '',
      id: ++this.state.id
    });
  }
}

export default Form;
