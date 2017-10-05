import React, { Component } from 'react';
import Champion from './Champion';
import * as helpers from '../helpers';

class ChampionsContainer extends Component {
  render() {
    let champions = this.props.masteries;
    champions = helpers.sort(champions, this.props.filterOption);
    return (
      <div>
        {champions.map(champion => {
          return <Champion key={champion.key} champion={champion} />
        })}
      </div>
    );
  }
}

export default ChampionsContainer;
