import './App.css';
import Home from './components/pages/Home/Home/Home';
import Header from './components/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/shared/NotFound/NotFound';
import Inventory from './components/pages/Inventory/Inventory';
import ManageInventory from './components/pages/ManageInventory/ManageInventory';
import UpdateItem from './components/pages/UpdateItem/UpdateItem';
import Blog from './components/pages/Blog/Blog';
import Login from './components/shared/Login/Login';
import AddItem from './components/pages/AddItem/AddItem';
import About from './components/pages/About/About';
import SignUp from './components/shared/SignUp/SignUp';
import RequireAuth from './components/shared/RequireAuth/RequireAuth';
import Feedbacks from './components/pages/Feedbacks/Feedbacks';
import ServiceDetail from './components/pages/ServiceDetail.js/ServiceDetail';
import MyItem from './components/pages/MyItem/MyItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <UpdateItem></UpdateItem>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/manage' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/newitem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/service/:id' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/feedback' element={<Feedbacks></Feedbacks>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
