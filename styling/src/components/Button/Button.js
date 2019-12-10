import React from "react";
// стили
import "./Button.css";
import { join } from "path";

/**
 * Ванильный CSS
 *
 * При использовании нужно создавать отдельные папки для компонентов для JS и CSS
 *
 * Не масштабируется
 * Глобальное пространство имен
 * Глубокая вложенность селекторов
 * С методологией вроде BEM - танцы с именованием
 * Отсутсвует удаление мертвого кода
 */
const Button = ({ type = "button", label = "", disabled = false }) => {
    const buttonClasses = ['Button'];

    if (disabled) {
        buttonClasses.push('disabled');
    }

  return (
    <button type={type} disabled={disabled} className={buttonClasses.join(' ')}>
      {label}
    </button>
  );
};

export default Button;
