import { Button } from "@material-ui/core";
import { RemoveShoppingCart } from "@material-ui/icons";
import { CartCards, P } from "./styled";



const CartCard = (props) => {
    return(
        <CartCards>
            <P>{props.job.title}</P>
            <p><b>R$</b>{props.job.price.toFixed(2)}</p>
            <Button onClick={() => props.removeFromCart(props.job.id)}><RemoveShoppingCart/></Button>
        </CartCards>
    )
}

export default CartCard;