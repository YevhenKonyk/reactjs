// Пакет для создания реакт элементов
import React from 'react';
// Пакет позволяет зарендерить виртуальный ДОМ в реальный 
import ReactDOM from 'react-dom';

/**
 * JavaScript Syntax Extension (JSX)
 * Позволяет использовать XML-образный синтаксис прямо в JavaScript
 * Упрощает код, делает его декларативным и читабельным
 * Описывает объекты - элементы Virtual DOM
 * Это не HTML, Babel трансформирует JSX в вызовы React.createElement()
 * Напоминает язык шаблонов, но в отличии от них, в нем можно использовать весь потенциал JavaScript
 */

 /**
  * Так как JSX преобразовывается в вызовы React.createElement(), пакет React должен быть в области видимости модуля.
  * В JSX можно использовать практически любое валидное JavaScript-выражение, оборачивая его в фигурные скобки.
  * Используя JSX, можно указывать атрибуты и их значения через двойные кавычки, если это обычная строка, или через 
  * фигурные скобки, если значение вычисляется, либо тип отличается от строки.
  * Все атрибуты React-элементов именуются с помощью camelCase.
  * JSX-теги могут быть родителями других JSX-тегов. Если тег пустой или самозакрывающийся, его обязательно необходимо закрыть используя />
  */

const product = (
    <div className="product">
        <img className="product__image" 
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
            alt="Tacos With Lime"
            width="240"/>
        <h2 className="product__title">Tacos With Lime</h2>
        <p className="product__price">Price: {10 + 0.99}$</p>
        <button type="button" className="btn product__btn">Add to cart</button>
    </div>
);

// ReactDOM.render(product, document.querySelector('#root'));

/** Правило общего родителя
 * Если в разметке лишний тег-обертка не нужен, существуют фрагменты, очень похожие на DocumentFragment.
 * Этот встроенный компонент при рендере растворяется, подставляя свое содержимое.
*/

// import React, { Fragment } from 'react';

// const newProduct = (
//     <Fragment>
//         <img className="product__image" 
//             src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//             alt="Tacos With Lime"
//             width="240"/>
//         <h2 className="product__title">Tacos With Lime</h2>
//         <p className="product__price">Price: {10 + 0.99}$</p>
//         <button type="button" className="btn product__btn">Add to cart</button>
//     </Fragment>
// );

// ReactDOM.render(newProduct, document.querySelector('#root'));

/** 
 * В последней версии Create React App синтаксис фрагментов можно сократить и не добавлять явно импорт Fragment.
 * Babel сделает все необходимые трансформации.
*/

const newProduct2 = (
    // Fragment
    <>
        <img className="product__image" 
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
            alt="Tacos With Lime"
            width="240"/>
        <h2 className="product__title">Tacos With Lime</h2>
        <p className="product__price">Price: {10 + 0.99}$</p>
        <button type="button" className="btn product__btn">Add to cart</button>
    </>
);

ReactDOM.render(newProduct2, document.querySelector('#root'));