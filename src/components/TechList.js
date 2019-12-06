import React from 'react';
import PropTypes from 'prop-types';

/**
 * Для того чтобы отрендерить коллекцию однотипных элементов, используется метод Array.prototype.map(),
 * callback-функция которого, для каждого элемента коллекции, возвращает JSX-разметку. Таким образом получаем массив
 * React-элементов который можно рендерить.
 *
 * Ключ (key) — это специальный строковый проп, который нужно задать при создании элементов коллекции.
 *
 * Элементы внутри коллекции должны быть обеспечены ключами, чтобы иметь стабильную идентичность. React использует ключи,
 * чтобы определить, какие из элементов в коллекции необходимо создать и отрендерить заново, а не использовать элементы из
 * предыдущего рендера.
 *
 * В коллекции всегда должен быть ключ, ставится на самый верхний уровень разметки.
 */
const TechList = props =>
  console.log(props) || (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

TechList.defaultProps = {
  items: [],
};

// Описание массива обьектов
TechList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TechList;
