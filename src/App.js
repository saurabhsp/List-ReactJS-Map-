import "./App.css";

function App() {
  const IPL = ["CSK", "MI", "RCB", "SRH", "DC"];
  const result = IPL.map((team) => <h1>{team}</h1>);

  return (
    <>
      <div className="App">{result}</div>
    </>
  );
}

export default App;
