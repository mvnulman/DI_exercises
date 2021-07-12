import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() { 

    const handleKeyPress = (event) => {
      if (event.which === 13) {
        alert('The Enter key was pressed, your input is: ' + event.target.value);
      }
    }

    return (
      <React.Fragment>
        <input type="text" onKeyPress={handleKeyPress} />
      </React.Fragment>
    )
  }
}

export default App;