This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

useState Hook:

1. UseState() is a function that we execute on top of our function.
2. we need to provide initial state to it, as we provide to our state also.

```java
    const [count]= useState(0);
```

Now there is a setState() functionality to set the state. For useState(), the second value is having the ability to set the state:

```java
    const [ count, setCount ] = useState(0);
```

SetState Issues:


```java
incrementCount = () => {
    this.setState({ count: this.state.count +1})
}
```

The setState() doesn't give the correct vslue of the state all the due due to multiple reasons. There fore, we use the "updater function", which is available to us as the first argument for the setstate():

```java
incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count +1}))
}
```

This ensures us that we always have the correct current value of the counter.

