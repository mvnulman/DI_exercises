import React from 'react';
import './App.css';
import 'tachyons';
import FormData from './components/FormData';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sent: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let inputs = event.target.getElementsByTagName('input');
    let labels = event.target.getElementsByTagName('label');
    let result = {};
    for (let i = 0; i < inputs.length; i++) {
      result[labels[i].textContent] = inputs[i].value;
      inputs[i].value = '';
    };
    console.log(result);
    this.setState({sent: 'Data was sent'});
  }

  render() {
    return (
      <div className="box" >
        <h2>New Book</h2>
        <FormData handleSubmit={this.handleSubmit} />
        <div>
          {this.state.sent}
        </div>
      </div>
    )
  }
}

export default App;