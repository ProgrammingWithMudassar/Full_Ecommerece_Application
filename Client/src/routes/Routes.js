import Cart from "../pages/Cart";
import {Home} from "../pages";
import ProductDetail from "../pages/ProductDetail";


const MainRoutes = [
    // { path: "/", component: Home },
    { path: "/", component: Home },
    { path: "/cart", component: Cart },
    { path: "/productDetail/:productId", component: ProductDetail },
];
export { MainRoutes };