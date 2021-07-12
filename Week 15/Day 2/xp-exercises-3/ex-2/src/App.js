import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }


    shot = () => {
    alert('Great Shot!')
  }


  render() {

    return (
      <>
        <button onClick= {()=> alert('Great Shot!')}>Take the shot!</button>
        <button onClick={this.shot}>Shot again!</button>
      </>
    )
  }
}

export default App;