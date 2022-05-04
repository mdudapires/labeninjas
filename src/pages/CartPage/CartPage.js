import CartCard from "../../components/CartCard/CartCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ButtonContainer, EmptyCartIcon, ScreenContainer, TotalPrice } from "./styled";
import cart from "../../img/cart.png";


const CartPage = (props) => {
    const navigate = useNavigate()
    const cartItems = props.cart.map((job) => {
        return <CartCard key={props.cart.id} cart={props.cart} removeFromCart={props.removeFromCart} title={props.cart.title} job={job} />
    })
    let totalPrice = 0;
    props.cart.forEach((item) => {
        totalPrice += item.price
    })

    return (
        <div>
            {cartItems.length > 0 ? (
                <>
                    {cartItems}
                    <TotalPrice>Total: R${totalPrice.toFixed(2)}</TotalPrice>
                    <ButtonContainer>
                    <Button variant="contained" color="primary" onClick={props.clearCart}>Finalizar compra</Button>
                    </ButtonContainer>
                </>
            )
                :
                (<ScreenContainer>
                    <EmptyCartIcon src={cart}/>
                    <h3>O seu carrinho está vazio. Que tal adicionar um serviço?</h3>
                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>Voltar</Button>
                    </ScreenContainer>)
            }
        </div>
    )
}

export default CartPage;