import React from 'react';

import buttonStyles from './Button.module.css';

/**
 * CSS-модули
 *
 * Create React App поддерживает CSS-модули из коробки, все что необходимо сделать это называть файлы стилей
 * согласно конвенции [name].module.css
 *
 * В CSS модулях не используются селекторы тэгов
 * 
 * Использование напоминает обычный CSS, за тем исключением, что все имена классов обфусцируются. В результирующем
 * CSS получаем уникальное имя класса в формате [filename]\_[classname]\_\_[hash]. CSS-модули решают проблему 
 * глобального пространсва имен с помощью мапинга классов из CSS-файла в объект с ключами по имени класса.
 */
const Button = ({ type = 'button', label = '', disabled = false }) => {
  return (
    <button type={type} disabled={disabled} className={disabled ? buttonStyles.disabled : buttonStyles.button}>
      {label}
    </button>
  );
};

export default Button;
