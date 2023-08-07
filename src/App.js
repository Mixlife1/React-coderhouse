import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/Items/:ItemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<h1>404 NOT FOUNDS</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
