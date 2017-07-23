import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { routes } from '../routes';
import configureStore from '../store/configureStore';

// Grab the state from a global variable injected into the server-generated HTML
// const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
// delete window.__PRELOADED_STATE__;

const initialState = {"config":{"common_jurisdiction_name":"North Carolina","common_jurisdiction":"nc","page_name":"Main","page_tag":"main"},"common":{"description":["<h2>Master Homepage for the NC Reentry Resources Hub</h2>","<h3>Placeholder for site introduction and instructions</h3>","<p>Lorem ipsum dolor sit amet, usu te interesset instructior, et ius quod percipit, duo ei essent prompta reprimique. Nam iudico ornatus ad, alienum epicurei dissentias mei ei. Sea no vidit platonem, tritani partiendo definitionem ex pro. Has no odio dolore eirmod, ne nobis vulputate nec, in pro nisl mnesarchum. Falli singulis conceptam qui ad, ei eos accusam accusamus definitionem. Per ut amet consul equidem, vidit ullamcorper vix ut, et vim illum reprimique appellantur. Ea duo paulo labore postulant, mel minim putant nostrud no, lorem vidisse ne has. In clita alterum scriptorem nec, wisi mnesarchum at vis. Magna clita denique no nam. Te clita tantas ignota pri, mea repudiare dignissim cu.</p>"]}};

// Create Redux store with initial state
const store = configureStore({content:initialState});

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}
