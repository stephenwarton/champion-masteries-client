import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({value: ''});
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container">
            <a className="navbar-brand" href="">NA Champion Masteries</a>
            <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Summoner Name" value={this.state.value} onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </nav>
    );
  }
}

export default Navbar;
