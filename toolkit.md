with redux-toolkit we dont use createStore
We can use:
 configureStore({
    reducer: nameOfStore
})

Normally in redux we declare the action name and action creator.
In toolkit we have a actionCreator hook

```javascript
const incrementNew = createAction('INCREMENT');
// This will create a action name and a acion we can call {type: "INCREMENT"}
```

Toolkit also adds a slice

```javascript
const counterSlice = createSlice({
    // Name is for internal use mostly
    name: 'counter',
    // Initial state. It could be bigger like map
    initialState: 0,
    // Reducers and actions are declared in same space
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
})

```