import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import ChampionsContainer from './components/ChampionsContainer';
import Dropdown from './components/Dropdown';
import * as helpers from './helpers';

let URL = 'http://localhost:3000/api/v1/mastery';

class App extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.state = {
      user: {},
      masteries: [],
      fetched: false,
      option: 'Mastery Points'
    }
  }

  handleSubmit(name){
    axios.post(URL, {
        name
      })
      .then(response => {
        //console.log(response);
        this.setState({
          user: response.data.user,
          masteries: response.data.masteries,
          fetched: true
        })
      })
      .catch(error => {
        //console.log(error);
      });
  }

  handleSelectChange(option){
    this.setState({option: option});
  }

  render() {
    return (
      <div>
        <Navbar handleSubmit={this.handleSubmit}/>
        <div className="container">
          {
            this.state.fetched
            ? <div>
                <h2>{this.state.user.name} <img className="profileIcon" src={`https://ddragon.leagueoflegends.com/cdn/7.19.1/img/profileicon/${this.state.user.icon}.png`} alt={this.state.user.icon}/></h2>
                <h4>Mastery Level: {helpers.format(this.state.user.masteryLevel)}</h4>
                <div className="row">
                  <div className="col-md-8">
                    <h4>Total Mastery Points: {helpers.format(this.state.user.points)}</h4>
                  </div>
                  <div className="col-md-4 container">
                    <Dropdown handleSelectChange={this.handleSelectChange}/>
                  </div>
                </div>
                <ChampionsContainer masteries={this.state.masteries} filterOption={this.state.option}/>
              </div>
            : <h2>Welcome</h2>
          }
          <div className="footer"><small>Made by Stephen W.</small></div>
        </div>
      </div>
    );
  }
}

export default App;
