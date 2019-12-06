import React from 'react';
// Components
import Product2 from './Product';
import Panel from './Panel';
import ProFileDetails from './Profile';
import MailBox from './MailBox';

const App = () => (
  //React Fragment - так как для рендеринга нескольких элементов нужен общий родитель.
  <>
    <MailBox unreadMessages={[1,2,3]}></MailBox>
    <Panel title="Profile Details">
      <ProFileDetails name="Yevhen Konyk" email="yevhen.konyk@gmail.com"/>
    </Panel>
    
    <Product2
      imageURL="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      // alt="Tacos With Lime"
      name="Tacos With Lime"
      price={50.55}
    />
    <Product2
      imageURL="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      alt="Fries and Burger"
      name="Fries and Burger"
      price={12.45}
    />
  </>
);

export default App;