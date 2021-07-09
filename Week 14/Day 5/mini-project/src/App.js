import React, { useState, useEffect} from "react";
import "./App.css";


const App = () => {
  const [quotes, setQuotes] = useState ('');

  const randomColor = () => {
      const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
      return color;
  }

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      const randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
      
    });
    randomColor()

  };

  useEffect(() => {
    getQuote ();
  }, [])
  
    return (
      <div className = "App" >
        <div className = "quote-container">
        <h1>"{quotes.text}"</h1>
        <h2>{quotes.author}</h2><br/>
        <button className ="btn" id="btn" onClick = {getQuote}> New quote</button>
        </div>
    </div>
    );
};


export default App;
