import {gql} from 'apollo-boost';

/*extend mean that i want to extend the existing type of
mutation that might exist in the back-end*/
export const typeDefs = gql`
 extend type Mutation{
  toggleCartHidden: Boolean!
 }
`
/*@client mean we want to look for cartHidden in local cache or client*/
const GET_CART_HIDDEN = gql`
 {
   cartHidden @client  
 }
`

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
      });

      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: {cartHidden: !cartHidden}
      });
      return !cartHidden;
      /*if any one call toggleCartHidden*/
    }
  }
}