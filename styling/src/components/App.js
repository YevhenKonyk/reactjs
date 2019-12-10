import React from 'react';

// Components
import Panel from './Panel';
import Products from '../products.json';
import ProductList from './ProductList';
import ButtonWithInlineStyles from './Button';
import ButtonWithVanilaCSS from './Button/Button';
import ButtonWithCSSModules from './Button/module/Button';


const App = () => (
  //React Fragment - так как для рендеринга нескольких элементов нужен общий родитель.
  <>
    <ButtonWithCSSModules label='Button With CSS Modules'/>
    <ButtonWithInlineStyles label="Button with inline styles"/>
    <ButtonWithVanilaCSS label="ButtonWithVanilaCSS"/>
    <Panel title="Best Sellers">
      <ProductList items={Products}></ProductList>
    </Panel>
  </>
);

export default App;
