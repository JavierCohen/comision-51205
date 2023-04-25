import './App.css';
import { Fragment, useState, useEffect } from "react";
import ItemComponent from "./components/ItemListContainer/ItemComponent";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const BASE_URL = "https://jsonplaceholder.typicode.com/albums/1/photos";

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => {
        return response.json();
      })
      .then ((data) => {
        setItems(data);
      });
  }, []);

  const updateCount = () => {
    setCount(count+1);
  };

  return (
    <Fragment> 
      <NavBar />
      <div className='container'>
        <h1>Total: {count}</h1>
        {items.length === 0 ? (
          <h1> Estamos cargando tu info...</h1>
        ) : (
          items.map((item, index) => {
            return <ItemComponent key={index} data={item} handlerUpdateCount={updateCount} />
          })
        )}
      </div>
    </Fragment>
  );
}

export default App;