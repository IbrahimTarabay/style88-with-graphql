import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
 /*This is a new special syntax when importing SVG in React.
 The ReactComponent import name is special and tells Create React App
 that you want a React component that renders an SVG, rather than its filename.*/
import './cart-icon.scss';

const CartIcon = ({toggleCartHidden,itemCount}) =>(
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

export default CartIcon;