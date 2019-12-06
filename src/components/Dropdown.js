import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ isOpen }) => (
  <div className="container">
    <button className="button" type="button">
      @
    </button>
    {/* Рендер по условию */}
    {isOpen && (
      <div className="dropdown">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    )}
  </div>
);

Dropdown.defaultProps = {
  isOpen: false,
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
};

export default Dropdown;
