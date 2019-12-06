import React from 'react';
// Components
import Product from './Product';
import Panel from './Panel';
import ProFileDetails from './Profile';
import MailBox from './MailBox';
import DropDown from './Dropdown';
import TechList from './TechList';

import Products from '../products.json';
import ProductList from './ProductList';

const technologies = [
  { id: 'id-1', name: 'JavaScript' },
  { id: 'id-2', name: 'React' },
  { id: 'id-3', name: 'React Router' },
  { id: 'id-4', name: 'Redux' },
];

const App = () => (
  //React Fragment - так как для рендеринга нескольких элементов нужен общий родитель.
  <>
    <Panel title="Best Sellers">
      <ProductList items={Products}></ProductList>
    </Panel>

    <TechList items={technologies}></TechList>
    <DropDown isOpen={true}></DropDown>
    <MailBox unreadMessages={[1, 2, 3]}></MailBox>

    <Panel title="Profile Details">
      <ProFileDetails name="Yevhen Konyk" email="yevhen.konyk@gmail.com" />
    </Panel>

    <Product
      imageURL="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      // alt="Tacos With Lime"
      name="Tacos With Lime"
      price={50.55}
    />
    <Product
      imageURL="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      alt="Fries and Burger"
      name="Fries and Burger"
      price={12.45}
    />
  </>
);

export default App;
