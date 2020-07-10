import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service'

export default class App extends Component {

  swapiService = new SwapiService();
  
  state = {
    showRandomPlanet: true,
    selectedPerson: 5
  }


  
  render() {
    
    return (
      <div className='stardb-app'>
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}   
                      getData={this.swapiService.getAllPlanets}
              renderItem={(item) => (<span>{item.name}<button>!</button></span>)}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
        
      </div>
    );
  }
}








