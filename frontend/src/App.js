import './App.css';
import PomodoroTimer from './components/PomodoroTimer';
import TaskInput from './components/TaskInput';

function App() {
  return (
    <div className="App">
      <h1>FocusMate AI</h1>
      <TaskInput />
      <PomodoroTimer />
      {/* Add more components later */}
    </div>
  );
}

export default App;
