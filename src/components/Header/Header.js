import { CartButtonDiv, LabeninjasHeader, LogoLabeninjas, Title } from "./styled";
import Button from '@material-ui/core/Button';
import { ShoppingCart } from "@material-ui/icons";
import { goToCartPage, goToHomePage } from "../../router/coordinator";
import { useNavigate } from 'react-router-dom';
import ninjaLogo from "../../img/ninjaLogo.png"



const Header = () => {
    const navigate = useNavigate()
    return (
        <LabeninjasHeader>
            <Button onClick={() => goToHomePage(navigate)}>
                <LogoLabeninjas src={ninjaLogo} />
                <Title>LabeNinjas</Title>
            </Button>
            <CartButtonDiv>
                <Button onClick={() => goToCartPage(navigate)}>
                    <ShoppingCart/>
                </Button>
            </CartButtonDiv>
        </LabeninjasHeader>
    )
}

export default Header;
