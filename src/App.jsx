import './App.css';
import { Router } from './router'
import { ListProvider } from "./hoc/ListProvider";
import { FilterProvider } from "./hoc/FilterProvider";
import { ModalProvider } from "./hoc/ModalProvider";

function App() {
  return (
    <div className="App">
      <ListProvider>
        <FilterProvider>
          <ModalProvider>
            <Router />
          </ModalProvider>
        </FilterProvider>
      </ListProvider>
    </div>
  );
}

export default App;
