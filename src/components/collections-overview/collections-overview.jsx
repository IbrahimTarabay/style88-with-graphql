import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview';

import './collections-overview.scss';

const CollectionsOverview = ({collections}) => (
  <div className='collections-overview'>
    {
      collections.map(({id, ...otherCollectionProps}) =>(
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))
    }
  </div>
);

export default CollectionsOverview;