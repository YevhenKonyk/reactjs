import React from 'react';
import PropTypes from 'prop-types';

import styles from './Dropdown.module.css';

const Dropdown = ({ isOpen = false }) => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button}>
        &#9776;
      </button>

      {isOpen && (
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Option 1</li>
          <li className={styles.menuItem}>Option 2</li>
          <li className={styles.menuItem}>Option 3</li>
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
};

export default Dropdown;
