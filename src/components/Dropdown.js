import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: 'Mastery Points'
    }
  }

  handleChange(e){
    e.preventDefault();
    this.setState({value: e.target.value});
    this.props.handleSelectChange(e.target.value);
  }

  render() {
    return (
      <select className="form-control select" value={this.state.value} onChange={this.handleChange}>
        <option>Mastery Points</option>
        <option>Name</option>
        <option>Most Recently Played</option>
        <option>Chest Earned: Yes</option>
        <option>Chest Earned: No</option>
      </select>
    );
  }
}

export default Dropdown;
