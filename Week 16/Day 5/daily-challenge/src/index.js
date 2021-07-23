import React from "react";
import ReactDOM from "react-dom";
import InfoBar from "./InfoBar";
import "./index.css";

// Create child Statcard component here
function StatCard({ label, icon, number }) {

  return (

    <div className = "stat-card">
      <div className = "stat-line">
        <span>{icon}</span>
        <strong>{label}</strong>
      </div>
      <p>{number}</p>
    </div>

  );
}

function App() {
  return (
    <div className="App">
      <p>Scrolling Cards Components</p>
      {/* Use child component x4 here */}
      <StatCard icon = "👉" label = "Points" number = {777} />
      <StatCard icon = "😊" label = "Facts" number = {7070} />
      <StatCard icon = "🐱‍👤" label = "Ninjas" number = {99999} />
      <StatCard icon = "🚀" label = "Spaceship" number = {11111} />

      <InfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
