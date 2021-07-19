import React from 'react';
import './App.css';
import 'tachyons';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      answer: ''
    }
  }

  componentDidMount() {
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const obj = {message: document.getElementById('inpt').value};
    console.log(obj);
    fetch('http://localhost:5000/input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({answer: data.answer})
      })
      .catch(err => {
        console.log(err);
      })

  }

  render() {

    return (
      <>
        <p className="tc">Hello From Express</p>
        <p className="tc" style={{fontWeight:"bold"}}>Post to Server:</p>
        <form className="tc" onSubmit={this.handleSubmit}>
          <input className="tc" type="text" name="text" style={{margin:"10px"}} id="inpt"/>
          <input className="tc" type="submit" value="Submit"/>
        </form>
        <p className="tc" style={{margin:"10px"}}>Response from the server:</p>
        <p className="tc" style={{margin:"10px", fontWeight:"bold"}}>{this.state.answer}</p>
      </>
    );
  }
}

export default App;