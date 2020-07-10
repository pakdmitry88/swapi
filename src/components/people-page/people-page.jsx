import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';
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
    const itemList = <ItemList onItemSelected={this.onPersonSelected}
      getData={this.swapiService.getAllPeople}
      renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
    />

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    )

    return (
      <Row left={itemList} rigth={personDetails}/>
    )
  }
}
