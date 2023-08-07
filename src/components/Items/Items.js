import React from 'react';
import './Items.css';
import { Link } from 'react-router-dom';

const Items = ({ id, name, img, price, stock }) => {
  return (
    <div className="box">
      <div className="columns is-vcentered">
        <div className="column is-one-quarter">
          <picture>
            <img src={img} alt={name} className="ItemImage" />
          </picture>
        </div>
        <div className="column">
          <h2 className="title is-4 ItemHeader">{name}</h2>
          <p className="subtitle is-6 ItemDescription">
            Precio: ${price}
          </p>
          <p className="subtitle is-6 ItemDescription">
            Productos en stock: {stock}
          </p>
          <Link to={`/items/${id}`} className="button is-primary">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Items;
