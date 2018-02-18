import {combineReducers} from 'redux';

import recipeBox from './recipeBox';
import leaderBoard from './leaderBoard';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  recipeBox,
  leaderBoard,
  form: formReducer
});

