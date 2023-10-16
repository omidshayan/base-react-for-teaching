import CustomHook from "./pages/CustomHook";
import Dashboard from "./pages/admin/dashboard";
import UseInput from "./pages/admin/UseInput";
import Context from "./pages/admin/context/Context";
import CreateProduct from "./pages/admin/products/createProduct";
import Products from "./pages/admin/products/products";
import Login from "./pages/auth/login";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomHook />} />
        <Route path="/login" element={<Login name='props' />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/useInput" element={<UseInput />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </div>
  );
}

export default App;
