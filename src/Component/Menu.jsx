import React, {  useState } from 'react';
import Data from './Data';
import MenuProduct from './MenuProduct';
import './Menu.css';
import Nav from './Nav';

const Menu = () => {
    const [menu,SetMenu]=useState(Data);
    
  return (
   <div className='container'>
   <Nav SetMenu={SetMenu}/>
    <MenuProduct menu={menu}/>
   </div>
    
    
    
  )
}

export default Menu