// Пакет для создания реакт элементов
import React from 'react';
// Пакет позволяет зарендерить виртуальный ДОМ в реальный 
import ReactDOM from 'react-dom';

/*
* Реакт элементы это ДОМ узлы виртуального ДОМа
* Создаются спомощью метода React.createElement('tagName', props, child, child ... )
* props - это обьект настроек, для встроенных элементов это атрибуты
* child - вложения в текущий тег
*/

const link = React.createElement('a', {
    href: 'https://reactjs.org',
    target: '_blank',
    rel: 'noreferrer noopener'
    }, 'ReactJS official web-site');

console.log(link);

const image = React.createElement('img', {
    src: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
    alt: 'Tacos With Lime',
    width: 640,
});

// Если нет props то передаётся null либо пустой обьект
const title = React.createElement('h2', null, 'Tacos With Lime');
const price = React.createElement('p', {}, 'Price: 10.99$');
const button = React.createElement('button', { type: 'button' }, 'Add to cart');

const product = React.createElement('div', null, image, title, price, button);

/*
 * Для передачи детей можно использовать свойство children параметра props.
 * Свойство children это массив.
 */
const productWithChildrenInProps = React.createElement('div', {
    children: [image, title, price, button],
});

const elementsRenderExample = React.createElement('div', {
    children: [product, productWithChildrenInProps],
});

/* Рендер элемента в DOM-дерево
* Для того чтобы отрендерить элемент, необходимо вызвать метод ReactDOM.render(), который, 
* первым аргументом принимает ссылку на React-элемент или компонент (что рендерить), а вторым, ссылку на уже существующий 
* DOM-элемент (куда рендерить).
*/

ReactDOM.render(elementsRenderExample, document.querySelector('#root'));

/*
* React использует модель отношений предок - потомок, поэтому достаточно использовать только один вызов ReactDOM.render() 
* в приложении. Рендер самого верхнего элемента в иерархии повлечет за собой рендер всего поддерева.
*/