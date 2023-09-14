import './App.css';
import ToggleRenderProps from './Commponent/ToggleRenderProps';
import Toglee from './Commponent/Toglee';
import Togleetip from './Commponent/Togleetip';

function App() {
  return (
    <div className="App">
      <h1>Componentes</h1>


      <h2>Toggle con HOC</h2>
      <Toglee>
        <p>Contenido del Toggle con HOC</p>
      </Toglee>


      <h2>Tooltip con Render Props</h2>
      <Togleetip text="Mensaje">
        <button>Hover aqui</button>
      </Togleetip>


      <h2>Toggle con Render Props</h2>
      <ToggleRenderProps>
        <p>Contenido del Toggle con Render Props</p>
      </ToggleRenderProps>
    </div>
  );
}

export default App;
