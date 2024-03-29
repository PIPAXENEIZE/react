import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home'
import Product from './components/product'
import Contact from './components/contact'
import NavBarTest from './components/navbar';
import ProductDetail from './components/itemdetail';
import CategoryLink from './components/categorylink';
//import ItemListContainer from './components/itemlistcontainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavBarTest /> }>
         <Route index element={ <Home /> } />
         <Route path='categoria/productos' element={ <Product /> } />
         <Route path='categoria/productos/SSD' element={ <CategoryLink /> } />
         <Route path='contact' element={ <Contact /> } />
         <Route path='*' element={ <Navigate replace to="/"/> } />
         <Route path="/product/items/:id" element={<ProductDetail />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;