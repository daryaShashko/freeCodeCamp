import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './app/App';
import LeaderBoard from './app/LeaderBoard/LeaderBoard';
import MarkdownPreviewer from './app/MarkdownPreviewer/MarkdownPreviewer';
import RecipeBox from './app/RecipeBox/RecipeBox';

import reducer from './reducers/index';
import storeSynchronize from 'redux-localstore';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

storeSynchronize(store);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path='/' exact component={App}/>
        <Route path='/leaderBoard' component={LeaderBoard}/>
        <Route path='/markdownPreviewer' component={MarkdownPreviewer}/>
        <Route path='/RecipeBox' component={RecipeBox}/>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);

