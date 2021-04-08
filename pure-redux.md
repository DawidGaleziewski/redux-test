# source:
https://www.youtube.com/watch?v=wcXTCG8zMhY&ab_channel=AnthonySistilli

# use ducks pattern to store action, reducer, state file structure:
1. MUST export default a function called reducer()
2. MUST export its action creators as functions
3. MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
4. MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library


to sum it up action reducers and state is put in one file
```javascript

```

Style guide for redux:
https://redux.js.org/style-guide/style-guide

ducks guide:
https://github.com/erikras/ducks-modular-redux