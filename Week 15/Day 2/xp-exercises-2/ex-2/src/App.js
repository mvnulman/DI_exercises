import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      favoriteColor: 'red',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoriteColor: 'yellow'})
    }, 5000);
    console.log('ComponentDidMount')
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div-text-2").innerHTML =
    "BEFORE UPDATE: My favorite color is " + prevState.color;
    console.log('getSnapShotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    document.getElementById('div-text').innerHTML =
    `My favorite color is ${this.state.favoriteColor}`
    console.log('ComponentDidUpdate')
  }

  shouldComponentUpdate() {
    return true;
  }
  
  render() {
  return (
    <>
      <h1>My favorite color is {this.state.favoriteColor}</h1>
      <h2 id="div-text"></h2>
      <h3 id="div-text-2"></h3>
    </>
  )
}
}

export default App;