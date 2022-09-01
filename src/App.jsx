import './App.css';
import { Router } from './router'
import { RequestsProvider } from './hoc/RequestsProvider';
import { ListsProvider } from "./hoc/ListsProvider";
import { FilterProvider } from "./hoc/FilterProvider";
import { TasksProvider } from "./hoc/TasksProvider";
import { ModalProvider } from "./hoc/ModalProvider";

function App() {
  return (
    <div className="App">
      <RequestsProvider>
        <ListsProvider>
          <FilterProvider>
            <TasksProvider>
              <ModalProvider>
                <Router />
              </ModalProvider>
            </TasksProvider>
          </FilterProvider>
        </ListsProvider>
      </RequestsProvider>
    </div>
  );
}

export default App;
