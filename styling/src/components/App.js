import React from 'react';

// Components
import Panel from './Panel';
import Products from '../products.json';
import ProductList from './ProductList';


const App = () => (
  //React Fragment - так как для рендеринга нескольких элементов нужен общий родитель.
  <>
    <Panel title="Best Sellers">
      <ProductList items={Products}></ProductList>
    </Panel>
  </>
);

export default App;
