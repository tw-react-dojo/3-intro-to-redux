build-lists: true

# React Dojo / Intro to Redux

### Wifi (twguest):

begin hark sauce editor sign
#### Hosted by ThoughtWorks / Presented by @cris7ian

#### `git clone https://github.com/tw-react-dojo/3-intro-to-redux`

---

> Redux is a predictable state container for JavaScript apps.

---

# The State

```js
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }]
}
```

---

# Actions

```js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
```

---

> (state, action) => state

---

# The Reducer / Duck

```js
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, completed: false }]
    case 'TOGGLE_TODO':
      return state.map(
        (todo, index) =>
          action.index === index
            ? { ...todo, completed: !todo.completed }
            : todo
      )
    default:
      return state
  }
}
```

---

# 3 Principles

- Single source of truth
- State is read-only
- Changes are made with pure functions

---

# Usage with React

```js
npm install --save react-redux
```

```js
// In Code
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

---

# mapState To Props

```js
state => ({
  prop: state.prop,
  otherProp: state.otherProp
})
```
---

# mapDispatchToProps
```js
dispatch => ({
  anAction: params => dispatch(anAction(params))
})
```

or

```js
{
  anAction //anAction: anAction
}
```

---

# Coding Time
