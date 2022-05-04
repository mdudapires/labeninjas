import { Button } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../router/coordinator";
import { ButtonsDiv, Card, P, Title } from "./styled";
import moment from "moment";

const ProductCard = (props) => {
    const navigate = useNavigate()

    const onClickDetails = (id) => {
        goToDetailsPage(navigate, id)
    }

    return (
        <Card>
            <Title>{props.job.title}</Title>
            <P>Até {moment(props.job.dueDate).format("DD/MM/YYYY")} por <b>R${props.job.price.toFixed(2)}</b></P>
            <ButtonsDiv>
                <Button variant="contained" color="primary" onClick={() => onClickDetails(props.job.id)}>Ver detalhes</Button>
                <Button onClick={() => {props.addToCart(props.job)}}><AddShoppingCart/></Button>
            </ButtonsDiv>
        </Card>
    )
}


export default ProductCard;
