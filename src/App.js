import React from 'react';
import { Switch, Route } from 'react-router-dom'

import CarList from './components/CarList';
import Car from './components/Car';

import { connect } from 'react-redux';
import { addItem, removeItem } from './actions/carActions'

const App = props => {
  console.log(props.cars);
  return (
    <div>
      <Switch>
        <Route path="/car/:carID"><Car cars={props.cars} addItem={props.addItem} removeItem={props.removeItem}/></Route>
        <Route path="/"><CarList cars={props.cars}/></Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cars: state.cars,
  }
}

export default connect(mapStateToProps, { addItem, removeItem })(App);