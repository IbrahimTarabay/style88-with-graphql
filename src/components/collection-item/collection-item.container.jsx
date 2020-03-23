import React from 'react';
import {Mutation} from 'react-apollo';
import {gql} from 'apollo-boost';

import CollectionItem from './collection-item';
import { addItemToCart } from '../../graphql/cart.utils';

const ADD_ITEM_TO_CART = gql`
 mutation AddItemToCart($item: Item!){
   addItemToCart(item: $item) @client
 }
`;

/*we get item in collection-preview as a props*/
const CollectionItemContainer = (props) => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {
      addItemToCart => <CollectionItem {...props} addItem={item => addItemToCart({variables:{item}})}/>
      /*this is just a shorthand way so we don't have to pass
      the variables prop, then grab the item*/
    }
  </Mutation>
);

export default CollectionItemContainer;