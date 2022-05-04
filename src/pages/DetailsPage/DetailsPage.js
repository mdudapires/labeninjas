import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../constants/urls";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import moment from "moment";
import { ButtonsContainer, ButtonsSpace, H2, ScreenContainer } from "./styled";

const DetailsPage = (props) => {
    const [job, setJob] = useState({})
    const params = useParams()
    const navigate = useNavigate()

    const getJobById = () => {
        axios.get(`${BASE_URL}/jobs/${params.id}`, headers)
            .then((res) => {
                setJob(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    useEffect(() => {
        getJobById()
    })

    return (
        <ScreenContainer>
            <H2>{job.title}</H2>
            <p>Aceita: <b>{job.paymentMethods}</b></p>
            <p>Até {moment(job.dueDate).format('DD/MM/YYYY')} por R${job.price}</p>
            <p>{job.description}</p>
            <ButtonsContainer>
                <ButtonsSpace><Button variant="contained" color="primary" margin="normal" onClick={() => navigate(-1)}>Voltar</Button></ButtonsSpace>
                <Button variant="contained" color="primary" onClick={() => props.addToCart(job)}><ShoppingCart /></Button>
            </ButtonsContainer>

        </ScreenContainer>
    )
}

export default DetailsPage;