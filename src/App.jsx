import './App.css';
import { Router } from './router'
import { RequestsProvider } from './hoc/RequestsProvider';
import { ListsProvider } from "./hoc/ListsProvider";
import { FilterProvider } from "./hoc/FilterProvider";
import { ModalProvider } from "./hoc/ModalProvider";
import { TaskProvider } from './hoc/TaskProvider';

function App() {
  return (
    <div className="App">
      <RequestsProvider>
        <ListsProvider>
            <FilterProvider>
              <TaskProvider>
                <ModalProvider>
                  <Router />
                </ModalProvider>
              </TaskProvider>
            </FilterProvider>
        </ListsProvider>
      </RequestsProvider>
    </div>
  );
}

export default App;
