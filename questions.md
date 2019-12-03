# Questions for Ravi

For my call with Ravi on the **4Dec2019**

## this.SetState

On my `userList.js` I am having a couple of questions on `this.setState`
```jsx
/*
  Why this does not work? (){} and needed to implement =()=>{}
  showGamesHandler() {
      this.setSate({
          showGames: !this.state.showGAmes
      })
  }

  Considering that in userEntry.js this (){} worked 
  changeHandler(e, name) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  */

  showGamesHandler = () => {
    this.setState({
      showGames: !this.state.showGames
    });
  };
```

## constructor(){}

When should I use the constructor? 
On the Managing State Exercise, the proposed solution uses the `constructor` to start the game, why is that needed?

```jsx
 constructor(props) {
    super(props);
    const valuesArray = this.makeNewQuestion();
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3],
    };
  }

    makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };

```


