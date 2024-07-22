import "./App.css";

function App() {
  const IPL = ["CSK", "MI", "RCB", "SRH", "DC", "CSK"];
  const result = IPL.map((team,index) => <h1 key={index}> {team} index is {index}</h1>);

  return (
    <>
      <div className="App">{result}</div>
    </>
  );
}

export default App;
