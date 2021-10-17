import React, { Component } from 'react';

class HabitAddForm extends Component {
  formRef=React.createRef();
  inputRef=React.createRef();

  onSubmit= (event) => {
    event.preventDefault();
    const name=this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form className="add-form" ref={this.formRef} onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" className="add-input" placeholder="What do you want to do?✨"></input>
        <button type="button" className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;