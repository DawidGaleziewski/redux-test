Redux saga works:
1. Dispatch action from component (regular redux action)

2. "Watcher Saga" watches for any action dsipatched. This is instead of our regular reducer. This will be mapped to saga owned functions.

3. Watcher saga maps the action to a handler function that makes the request

4. Handler dispatches action that sends the data to a store

getUser()
watcherSaga()
handleGetUser()
requestGetUser() axios
handleGetUser() {again}
setUser()


## setup

npm i redux-saga --save

in our redux config we need to import redux saga middleware:

```javascript
import createSagaMiddleware from 'redux-saga';
```

we want to init our middleware. We may have more middleware in the future

```javascript
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
```

in our config we need to import a function to apply middleware to redux
```javascript
import {combineReducers, createStore, applyMiddleware} from 'redux';

// Second arg is a enchancer.
// Last arg is the middleware. We apply saga as a middleware. Saga will listen to any actions
const store = createStore(reducer, {}, applyMiddleware(...middleware));
```