import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
import { pendingTasksReducer as pendingTasks } from 'react-redux-spinner';
import authorization from './authorization';
import events from './events';

const rootReducer = combineReducers({
  routing,
  firebase,
  authorization,
  events,
  pendingTasks,
});

export default rootReducer;
