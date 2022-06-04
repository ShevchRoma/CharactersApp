import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import addLikeCharacter from './reducers/addLikeCharacter';
import getCharacter from './reducers/getCharacter';
import getCharacters from './reducers/getCharacters';

const rootReducer = combineReducers({
    characters: getCharacters,
    character: getCharacter,
    likecharacter: addLikeCharacter
  });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;