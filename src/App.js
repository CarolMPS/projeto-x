import logo from './logo.svg';
import './App.css';
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>

    <div className="App">
      <Home />
    </div>
    </DndProvider>
  );
}

export default App;
