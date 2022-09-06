import './App.css';
import { Router } from './router'
import { RequestsProvider } from './hoc/RequestsProvider';
import { ModalProvider } from "./hoc/ModalProvider";

function App() {
  return (
    <div className="App">
      <RequestsProvider>
                <ModalProvider>
                  <Router />
                </ModalProvider>
      </RequestsProvider>
    </div>
  );
}

export default App;
