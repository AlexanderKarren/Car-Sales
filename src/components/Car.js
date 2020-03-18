import React from 'react'
import { useParams } from 'react-router-dom';

import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

const Car = props => {
    const {carID} = useParams();
    return (
        <div className="boxes">
        <div className="box">
          <Header car={props.cars[carID].car} />
          <AddedFeatures car={props.cars[carID].car} removeItem={props.removeItem}/>
        </div>
        <div className="box">
          <AdditionalFeatures addItem={props.addItem} carID={carID} additionalFeatures={props.cars[carID].additionalFeatures} />
          <Total car={props.cars[carID].car} additionalPrice={props.cars[carID].additionalPrice} />
        </div>
      </div>
    )
}

export default Car;