import {gql} from 'apollo-boost';

import {addItemToCart,getCartItemCount} from './cart.utils';
/*extend mean that i want to extend the existing type of
mutation that might exist in the back-end*/
export const typeDefs = gql`
 extend type Item{
  quantity: Int
 }

 extend type Mutation{
  ToggleCartHidden: Boolean!
  AddItemToCart(item: Item!): [Item]!
 }
`;
/*@client mean we want to look for cartHidden in local cache or client*/
const GET_CART_HIDDEN = gql`
 {
   cartHidden @client  
 }
`;

const GET_ITEM_COUNT = gql`
 {
   itemCount @client
 }
`;

const GET_CART_ITEMS = gql`
 {
   cartItems @client
 }
`;

export const resolvers = {
  Mutation:{
     /*_root,..,.. they are meant to not be modified*/
     /*_root represents the top-level object that holds the
     actual type, in our case we're at the top level because our mutation is at very highest level 
     of cash object*/
     /*the args object represents all of the arguments that
     we could possibly get access to inside of the mutation*/  
    toggleCartHidden: (_root,_args,{cache}) => {
      const {cartHidden} = cache.readQuery({
        query: GET_CART_HIDDEN
      });/*to pull first the cartHidden value*/

      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: {cartHidden: !cartHidden}
      });
      return !cartHidden;
      /*if any one call toggleCartHidden*/
    },

    addItemToCart: (_root,{item},{cache}) => {
      const {cartItems} = cache.readQuery({
        query: GET_CART_ITEMS
      });
      const newCartItems = addItemToCart(cartItems,item);
       
       cache.writeQuery({
         query: GET_ITEM_COUNT,
         data: {itemCount: getCartItemCount(newCartItems)}
       });
      

       cache.writeQuery({
         query: GET_CART_ITEMS,
         data: {cartItems: newCartItems}  
       });
       return newCartItems;
    }
  }
};