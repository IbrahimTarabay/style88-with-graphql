import React from 'react';
import {Query,Mutation} from 'react-apollo';
import {gql} from 'apollo-boost';

import CartDropdown from './cart-dropdown';

const TOGGLE_CART_HIDDEN = gql`
 mutation ToggleCartHidden{
   toggleCartHidden @client
 }
`;

const GET_CART_ITEMS = gql`
 {
   cartItems @client
 }
`;

/*we wrap because we want to toggle cart when we go
to checkout page*/
const CartDropdownContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {
      toggleCartHidden => (
        <Query query={GET_CART_ITEMS}>
          {
            ({data: {cartItems}}) => (
              <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden}/>
            )  
          }
        </Query>
      )  
    }
  </Mutation>
);

export default CartDropdownContainer;