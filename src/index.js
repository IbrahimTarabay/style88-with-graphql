import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';/*to keep your UI in sync with the URL*/ 
import {ApolloProvider} from 'react-apollo';
import {createHttpLink} from 'apollo-link-http';
/*connect our client to our specific endpoint "/graphql"*/
import {InMemoryCache} from 'apollo-cache-inmemory';
/*Apollo uses to actually cache the data that it fetches so 
it doesn't make double requests and it tries to be as optimal as 
it can about making requests and then keeping the data*/
import {ApolloClient,gql} from 'apollo-boost';
/*gql is a function to make graphql request*/

import './index.css';

import App from './App';

import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';/*to use redux*/
import {store,persistor} from './redux/store';
/*Provider gives us ability to use store and reducers*/
/*provider is component which is parent of everything in our app*/
const httpLink = createHttpLink({
  uri: 'https://rocky-sierra-00708.herokuapp.com'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

client.query({
  query:gql`
    {
      getCollectionsByTitle(title: "hats"){
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
  `
}).then(res => console.log(res));

ReactDOM.render(
  <ApolloProvider client={client}>
   <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </BrowserRouter>
   </Provider>
   </ApolloProvider>,
 document.getElementById('root'));