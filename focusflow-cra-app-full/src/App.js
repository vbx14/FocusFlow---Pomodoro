import PomodoroTimer from "./components/PomodoroTimer";

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <PomodoroTimer />
    </div>
  );
}

export default App;
