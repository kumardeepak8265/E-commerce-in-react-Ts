import { Route, Routes } from "react-router-dom";
import ProductDetail from "./Component/ProductDetail";
import ProductPage from "./Component/ProductPage";
import Footer from "./Component/Footer";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div className="m-2">
      <NavBar></NavBar>
      <div className="h-screen overflow-scroll bg-gray-200 mx-auto sm:py-20 sm:px-10 ">
        <Routes>
          <Route
            path="/ProductDetail/:id"
            element={<ProductDetail></ProductDetail>}
          />
          <Route index element={<ProductPage></ProductPage>} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
