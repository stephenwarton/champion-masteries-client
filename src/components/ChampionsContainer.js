import React, { Component } from 'react';
import Champion from './Champion';
import * as helpers from '../helpers';

class ChampionsContainer extends Component {
  render() {
    let champions = this.props.masteries;
    champions = helpers.sort(champions, this.props.filterOption);
    champions = champions.filter(champion => {
      return champion.name.toLowerCase().indexOf(this.props.champName.toLowerCase()) !== -1;
    })
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
