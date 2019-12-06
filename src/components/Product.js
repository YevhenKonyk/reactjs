import React from 'react';

// props validation package
import PropTypes from 'prop-types';

/**
 * Компоненты должны храниться в отдельных файлах, один компонент один файл.
 */

// Can use destructurization{imageURL, alt, name, price}
const Product = props => (
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

// Дэфолтные настройки, в случае если не передали prop
Product.defaultProps = {
  alt: 'Product image',
};

// Можно описать для всех prop какой тип ожидается
Product.propTypes = {
  imageURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
