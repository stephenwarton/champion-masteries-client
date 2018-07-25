import React, { Component } from 'react';
import * as helpers from '../helpers';

let version = '8.14.1';

class Champion extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    //console.log(this.props.champion);
  }

  render() {
    return (
      <span>
        <img
          className="icon"
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${
            this.props.champion.key
          }.png`}
          alt={this.props.champion.key}
          onClick={this.handleClick}
          data-toggle="modal"
          data-target={`#${this.props.champion.key}`}
        />
        <div className="champName">{this.props.champion.name}</div>
        <div
          className="modal fade"
          id={this.props.champion.key}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        className="loading"
                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
                          this.props.champion.key
                        }_0.jpg`}
                        alt={this.props.champion.key}
                      />
                    </div>
                    <div className="col-md-6 modalBody">
                      <h3 className="modal-title" id="myModalLabel">
                        {this.props.champion.name}
                      </h3>
                      <h4>{this.props.champion.title}</h4>
                      <div>
                        Champion Level: {this.props.champion.championLevel}
                      </div>
                      <div>
                        Champion Points:{' '}
                        {helpers.format(this.props.champion.championPoints)}
                      </div>
                      <div>
                        Points Since Last Level:{' '}
                        {helpers.format(
                          this.props.champion.championPointsSinceLastLevel
                        )}
                      </div>
                      <div>
                        Points Unitl Next Level:{' '}
                        {helpers.format(
                          this.props.champion.championPointsUntilNextLevel
                        )}
                      </div>
                      <div>
                        Mastery Tokens: {this.props.champion.tokensEarned}
                      </div>
                      <div>
                        Chest Earned:{' '}
                        {helpers.chest(this.props.champion.chestGranted)}
                      </div>
                      <div>
                        Last Time Played:{' '}
                        {helpers.formatDate(this.props.champion.lastPlayTime)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default Champion;
