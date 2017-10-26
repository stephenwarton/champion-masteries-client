import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import ChampionsContainer from './components/ChampionsContainer';
import Dropdown from './components/Dropdown';
import * as helpers from './helpers';
const loading = require('./loading.gif');

//let URL = 'http://localhost:3000/api/v1/mastery';
let URL = 'https://champion-masteries.herokuapp.com/api/v1/mastery';

class App extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      user: {},
      masteries: [],
      fetched: false,
      option: 'Mastery Points',
      loading: false,
      header: 'Welcome',
      champName: ''
    }
  }

  handleSubmit(name){
    this.setState({
      loading:true,
      header: 'Loading'
    });
    axios.post(URL, {
        name
      })
      .then(response => {
        //console.log(response);
        this.setState({
          user: response.data.user,
          masteries: response.data.masteries,
          fetched: true,
          loading: false,
          header: 'Welcome'
        })
      })
      .catch(error => {
        //console.log(error);
      });
  }

  handleSelectChange(option){
    this.setState({option: option});
  }

  handleChange(e){
    this.setState({champName: e.target.value});
  }

  render() {
    return (
      <div>
        <Navbar handleSubmit={this.handleSubmit}/>
        <div className="container">
          {
            !this.state.fetched || this.state.loading
            ? <h2>{this.state.header}</h2>
            : null
          }
          {
            this.state.loading
            ? <div>
                <img className="loading-gif" src={loading} alt="loading gif" />
              </div>
            : null
          }
          {
            this.state.fetched
            ? <div>
                <h2>{this.state.user.name} <img className="profileIcon" src={`https://ddragon.leagueoflegends.com/cdn/7.20.3/img/profileicon/${this.state.user.icon}.png`} alt={this.state.user.icon}/></h2>
                <h4>Mastery Level: {helpers.format(this.state.user.masteryLevel)}</h4>
                <div className="row">
                  <div className="col-md-4">
                    <h4>Total Mastery Points: {helpers.format(this.state.user.points)}</h4>
                  </div>
                  <div className="col-md-4 form-group">
                    <input type="text" className="form-control" placeholder="Champion Name" value={this.state.champName} onChange={this.handleChange} />
                  </div>
                  <div className="col-md-4 container">
                    <Dropdown handleSelectChange={this.handleSelectChange}/>
                  </div>
                </div>
                <ChampionsContainer masteries={this.state.masteries} champName={this.state.champName} filterOption={this.state.option}/>
              </div>
            : null
            }
          <div className="footer"><small>Made by Stephen W.</small></div>
        </div>
      </div>
    );
  }
}

export default App;
