import React from "react";

/** Инлайн CSS - не используется практически никогда.
 *
 * Плохая производительность
 * Не масштабируется
 * Ограниченные возможности (псевдоэлементы, медиа и т. п.)
 * Нет инструментов и сложно дебажить
 */

// Обычный JS обьект,ключи - свойства CSS, записываются в кемелКейс
const buttonStyles = {
  display: "inline-flex",
  margin: "0 4px",
  padding: "8px 24px",
  border: 0,
  borderRadius: 2,
  fontSize: 14,
  fontFamily: "inherit",
  cursor: "pointer"
};

// Дэфолтные props
const Button = ({ type = "button", label = "", disabled = false }) => (
  <button
    type={type}
    disabled={disabled}
    style={{
      // распыление базовых стилей
      ...buttonStyles,
      // смена стилей по условию
      backgroundColor: disabled ? "#0000001f" : "#2196f3",
      color: disabled ? "#00000042" : "#ffffff"
    }}
  >
    {label}
  </button>
);

// const Button = ({ type = "button", label = "", disabled = false }) => (
//   <button type={type} disabled={disabled}>
//     {label}
//   </button>
// );

export default Button;
