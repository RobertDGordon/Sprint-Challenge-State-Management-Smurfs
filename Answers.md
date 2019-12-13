1. What problem does the context API help solve?

-Context solves the problem of having to pass down props from component to component.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Actions are objects that tell the reducer which function to put into action.  Store is global state, that each component looks to for the source of state.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application state is stored globally, component state is stored locally.  When you don't need to pass data to other components, component state is better used.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-Redux-thunk is middleware allows us to call action creators that return a function instead of an action object through dispatch.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

-I like Redux a lot, it's very easy to setup and pass data into other components.