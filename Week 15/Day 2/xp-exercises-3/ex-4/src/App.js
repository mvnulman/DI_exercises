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

  shot2 = () => {
    alert(this);
  }

  shot3 = () => {
    alert(this.state);
  }

  render() {

    return (
      <>
        <button onClick= {()=> alert('Great Shot!')}>Take the shot!</button>
        <button onClick={this.shot}>Shot again!</button>
        <button onClick={this.shot2}>Keep Shooting!</button>
        <button onClick={this.shot3}>Keep Shooting!</button>
      </>
    )
  }
}

export default App;