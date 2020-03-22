import React,{useState} from 'react';
import ReactSearchBox from 'react-search-box'

import CollectionItem from '../../components/collection-item/collection-item';

import './collection.scss';

const CollectionPage = ({collection}) =>{
  const [searchField,setSearchField] = useState({searchfield:''});
  const {searchfield} = searchField;
  const { title, items } = collection;
 
const onChangeSearch = (event) =>{
   setSearchField({searchfield: event})
 }

  const filteredItems = items.filter(item =>{
    return item.name.toLowerCase().includes(searchfield.toLowerCase())});
  
 return(
  <div className='collection-page'>
    <h2 className='title'>{title}</h2>
      <div className='search'>
      <ReactSearchBox
          placeholder={`search ${title}`}
          onChange={onChangeSearch}   
          />
      </div>
    <div className='items'>
       {
        filteredItems.map(item => <CollectionItem key={item.id} item={item} />)
       }
    </div>
  </div>
  )
 }

export default CollectionPage;