import {Route, Routes} from "react-router-dom";
import ErrPage from "../components/ErrPage";
import Home from "../components/Navbar";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";
// import Singleproduct from "../components/SingleProduct";


export default function AllRoutes(){
    return(
        <div>
            <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/products" element={<Products/>}></Route>
               <Route path="/sproduct/:id" element={<SingleProduct />}></Route>
               {/* <Route path="/*" element={<ErrPage/>}></Route> */}
             
            </Routes>
        </div>
    )
}