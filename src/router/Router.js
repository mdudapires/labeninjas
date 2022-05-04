import { Route, Routes } from 'react-router-dom';
import CartPage from '../pages/CartPage/CartPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import HomePage from '../pages/HomePage/HomePage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ContractPage from '../pages/ContractPage/ContractPage';

const Router = (props) => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cadastro" element={<SignUpPage/>}/>
            <Route path="/contrate-um-ninja" element={<ContractPage addToCart={props.addToCart} />}/>
            <Route path="detalhe/:id" element={<DetailsPage addToCart={props.addToCart}/>}/>
            <Route path="/carrinho-de-compras" element={<CartPage cart={props.cart} removeFromCart={props.removeFromCart} clearCart={props.clearCart}/>}/>
        </Routes>
    )
}

export default Router;