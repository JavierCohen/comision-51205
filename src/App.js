import './App.css';
// Importo mi componente NavBar
import NavBar from './components/NavBar/NavBar';
// Importo mi componente itemListContainer
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// Importo el componente de BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='Saludo'>
        <ItemListContainer greeting={'Bienvenidos'}/>
      </div>
    </div>

  );
}

export default App;