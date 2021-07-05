import logo from "./logo.svg";
import "./App.css";
import Myelement from './Myelement';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5;
const tenTimes = (
  <h1>React is {sum} times better with JSX</h1>
)

const listItems = (
  <ul>
    <li>Apple</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
)

const headers = (
  <>
    <header><h1>I am a Header</h1></header>
    <header><h1>I am a Header too.</h1></header>
  </>
)

const input = (
  <>
    <input type="text" placeholder=""></input>
  </>
)

const name = 'John';
const age = 12
const person = `${name} is ${age} years old` 


function App() {
  return (
    <>
      <p>Exercise 1:</p>
      <h1>HELLO WORLD!</h1>

      <p>Exercise 2:</p>
         {myelement}

      <p>Exercise 3:</p>
        <Myelement/>

      <p>Exercise 4:</p>
         {tenTimes}

      <p>Exercise 5:</p>
        {listItems}

      <p>Exercise 6:</p>
        {headers}

      <p>Exercise 7:</p>
        {input}

        <p>Exercise 8:</p>
        {person}
    </>

  );
}

export default App;
