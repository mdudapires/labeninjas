import { useNavigate } from "react-router-dom";
import { goToContractPage, goToSignUpPage } from "../../router/coordinator";
import { Buttons, Image, H2, H3, H4, Main, ButtonsContainer } from "./styled";
import workers from "../../img/workers.png";

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <Main>
            <aside>
                <H2>O talento certo no momento certo</H2>
                <H3>Fundada em 2022, a LabeNinjas é uma empresa virtual especializada na contratação de serviços.
                    Através da plataforma, conectamos o prestador de serviço à pessoa solicitante.
                </H3>
                <H4>Conectando quem precisa com quem sabe fazer</H4>
                <ButtonsContainer>
                <Buttons onClick={() => goToSignUpPage(navigate)}>Seja um ninja</Buttons>
                <Buttons onClick={() => goToContractPage(navigate)}>Contrate um ninja</Buttons>
                </ButtonsContainer>
            </aside>
            <article>
                <Image src={workers} alt="workers" width="500px" />
            </article>


        </Main>

    )
}

export default HomePage;