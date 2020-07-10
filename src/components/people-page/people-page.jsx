import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './people-page.css';
import SwapiService from '../../services/swapi-service'
import App from '../app';
export default class PeoplePage extends Component {

  swapiService = new SwapiService();
  
  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }
  
  render() {


    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} 
            getData={this.swapiService.getAllPeople}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  }
}