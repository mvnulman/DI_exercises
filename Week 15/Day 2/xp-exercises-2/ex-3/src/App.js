import React from 'react';


class Child extends React.Component {
  componentWillUnmount() {
    alert("The component is about to be unmounted");
  }
  render() {
    return (
      <React.Fragment>
      <h3>Hello World!</h3>
      </React.Fragment>
    );
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      favoriteColor: 'red',
      show: true
    }
  }

  delete = () => {
    this.setState({show:false});
  }
  
  render() {
    var example;
    if (this.state.show) {
      example = <Child />
    }
  return (
    <>
      {example}
      <button onClick={this.delete}>Delete Example</button>
    </>
  )
}
}

export default App;