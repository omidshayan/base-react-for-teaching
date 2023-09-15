import Dashboard from "./pages/admin/dashboard";
import CreateProduct from "./pages/admin/products/createProduct";
import Products from "./pages/admin/products/products";
import Login from "./pages/auth/login";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login name='props' />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
