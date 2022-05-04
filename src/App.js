import './App.css';
import Home from './components/pages/Home/Home/Home';
import Header from './components/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/shared/NotFound/NotFound';
import Inventory from './components/pages/Inventory/Inventory';
import ManageInventory from './components/pages/ManageInventory/ManageInventory';
import UpdateItem from './components/pages/UpdateItem/UpdateItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<UpdateItem></UpdateItem>}></Route>
        <Route path='/inventory/manage' element={<ManageInventory></ManageInventory>}></Route>
        <Route></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
