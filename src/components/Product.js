import React from 'react';

/**
 * Компоненты должны храниться в отдельных файлах, один компонент один файл.
 */

// Can use destructurization{imageURL, alt, name, price}
const Product2 = props => (
  <div className="product__tile">
    <img
      className="product__image"
      src={props.imageURL}
      alt={props.alt}
      width="240"
    />
    <h2 className="product__title">{props.name}</h2>
    <p className="product__price">Price: {props.price}$</p>
    <button type="button" className="btn product__btn">
      Add to cart
    </button>
  </div>
);

export default Product2;
