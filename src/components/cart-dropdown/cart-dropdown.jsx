import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';

import shopping from '../../assets/shopping.png';

const CartDropdown = ({cartItems,history,toggleCartHidden}) =>(
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? 
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        :
        <div className='container'>
         <span className='empty-message'>Your cart is empty</span>
         <img className='img' alt="shopping-cart" src={shopping}/> 
        </div>
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      toggleCartHidden();
     }}>
      GO TO CHECKOUT
      </CustomButton>
      {/*you can use Link, no problem,the reason we use history is because CustomButton is not Link
        you of course can change the base component of CustomButton to Link*/}
   </div>
);

export default withRouter(CartDropdown);
/*withRouter is high order component that take another component as argument*/
/*with this way our component will have access to the props that we are looking
for which in this case "history"*/