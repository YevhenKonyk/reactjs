import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from '../components/App';

/**
 * Компоненты - основные строительные блоки React-приложений, позволяющие разделить интерфейс на независимые части.
 * Самое главное в этой концепции то, что и большие, и маленькие компоненты можно использовать повторно и в текущем
 * и в новом проекте.
 * Таким образом React-приложение можно представить как дерево компонентов, где на верхнем уровне стоит корневой компонент,
 * в котором вложено произвольное количество других компонентов. Каждый компонент должен вернуть JSX-разметку, тем самым
 * указывая какой HTML мы хотим отрендерить в DOM.
 *
 * В простейшей форме компонент это JavaScript-функция с очень простым синтаксисом: функция получает объект свойств который
 * называется props и возвращает дерево React-элементов.
 *
 * Имя компонента обязательно должно начинаться с заглавной буквы. Названия компонентов с маленькой буквы зарезервированы
 * для HTML-элементов. Если попробовать назвать компонент card, а не Card, при рендере, React проигнорирует его и отрендерит
 * тег <card></card>
 *
 * const product = props => (function body, JSX markup);
 */

// Функциональный компонент
const Product = props => (
  <div className="product">
    <img
      className="product__image"
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      width="240"
    />
    <h2 className="product__title">Tacos With Lime</h2>
    <p className="product__price">Price: {10 + 0.99}$</p>
    <button type="button" className="btn product__btn">
      Add to cart
    </button>
  </div>
);

// Вызов компонента записывается как JSX-тег
// ReactDOM.render(<Product />, document.getElementById('root'));

// Это аналогично
// ReactDOM.render(React.createElement(Product), document.getElementById('root'));

/**
 * Свойства компонента (props) - обьект
 * Это настройки компонента, те данные которые компонент получает и подставляет в результирующую разметку
 *
 *
 */

// Вызов компонента
ReactDOM.render( <App />, document.getElementById('root'),
);

/**
 * Компоненты должны храниться в отдельных файлах, один компонент один файл.
 */
