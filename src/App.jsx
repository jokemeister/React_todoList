import './App.css';
import { Router } from './router'
import { RequestsProvider } from './hoc/RequestsProvider';

function App() {
  return (
    <div className="App">
      <RequestsProvider>
        <Router />
      </RequestsProvider>
    </div>
  );
}

export default App;
