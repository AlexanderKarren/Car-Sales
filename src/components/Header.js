import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <>
      <Link to="/">Return</Link>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

export default Header;
