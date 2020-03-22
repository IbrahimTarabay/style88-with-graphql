import React from 'react';
import {Query} from 'react-apollo';
/*instead of using client.query() like index.js*/
import {gql} from 'apollo-boost';
/*gql is a function to make graphql request*/
import CollectionsOverview from './collections-overview';
import Spinner from '../spinner/spinner';


const GET_COLLECTIONS = gql`
 {
   collections{
     id
     title
     items{
       id
       name
       price
       imageUrl
     }
   }
 }
`;

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {
      ({loading,data}) => {
        if(loading){
          return <Spinner/>
        }else{
        return <CollectionsOverview collections={data.collections}/>
      }
     }
    }
    </Query>
);

export default CollectionsOverviewContainer;