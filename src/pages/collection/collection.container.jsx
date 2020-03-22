import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionPage from './collection';
import Spinner from '../../components/spinner/spinner';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
/*what we're saying is that this title value that we're gonna get
is going to be a string and we want to set it to actual title that query
itself is expecting in the back-end, we simply pass in parameters*/

const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: match.params.collectionId }}
  >
    {({ loading, data }) => {
      return loading ? (
        <Spinner />
        ) : (
        <CollectionPage collection={data.getCollectionsByTitle} />
        );
     }}
  </Query>
);

export default CollectionPageContainer;