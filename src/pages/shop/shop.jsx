import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({match}) => (
   /*we have access to match object because 
  <Route path='/shop' component={ShopPage} /> which in App.js*/
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
  </div>
);

export default ShopPage;