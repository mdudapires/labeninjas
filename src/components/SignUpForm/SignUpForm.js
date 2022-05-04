import { TextField, Select, MenuItem, Input } from "@material-ui/core";
import { useState } from "react";
import { BASE_URL, headers } from "../../constants/urls";
import axios from 'axios';
import { Buttons, ButtonsDiv, InputsContainer, ScreenContainer, Title } from "./styled";
import { useNavigate } from "react-router-dom";




const SignUpForm = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [paymentMethods, setPaymentMethods] = useState("")
    const [dueDate, setDueDate] = useState("")

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value);
    }

    const onChangePaymentMethods = (event) => {
        setPaymentMethods(event.target.value);
    }

    const onChangeDueDate = (event) => {
        setDueDate(event.target.value);
    }

    const createJob = () => {
        const body = {
            "title": title,
            "description": description,
            "price": Number(price),
            "paymentMethods": Array(paymentMethods),
            "dueDate": dueDate
        }
        axios.post(`${BASE_URL}/jobs`, body, headers)
            .then(() => {
                alert(`O serviço ${title} foi criado com sucesso!`)
                setTitle("")
                setDescription("")
                setPrice("")
                setPaymentMethods("")
                setDueDate("")

            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    return (
        <ScreenContainer>
            <Title>Cadastro</Title>
            <InputsContainer>
                <TextField
                    value={title}
                    onChange={onChangeTitle}
                    fullWidth
                    required
                    variant="outlined"
                    placeholder="Título" />
            </InputsContainer>
            <InputsContainer>
                <TextField
                    value={description}
                    onChange={onChangeDescription}
                    fullWidth
                    required
                    variant="outlined"
                    placeholder="Descrição"
                />
            </InputsContainer>

            <InputsContainer>
                <TextField
                    value={price}
                    onChange={onChangePrice}
                    fullWidth
                    required
                    variant="outlined"
                    placeholder="Preço"
                    type="number"
                />
            </InputsContainer>

            <InputsContainer>
                <Select
                    value={paymentMethods}
                    onChange={onChangePaymentMethods}
                    displayEmpty
                    variant="outlined"
                    fullWidth
                    required
                >
                    <MenuItem value="" disabled>Formas de pagamento</MenuItem>
                    <MenuItem value={'Cartão de crédito'}>Cartão de crédito</MenuItem>
                    <MenuItem value={'Cartão de débito'}>Cartão de débito</MenuItem>
                    <MenuItem value={'PayPal'}>PayPal</MenuItem>
                    <MenuItem value={'Boleto'}>Boleto</MenuItem>
                    <MenuItem value={'Pix'}>Pix</MenuItem>
                </Select>
            </InputsContainer>

            <InputsContainer>
                <Input fullWidth value={dueDate} onChange={onChangeDueDate} placeholder="Prazo do Serviço" type="date" />
            </InputsContainer>

            <ButtonsDiv>
            <Buttons onClick={createJob}>Criar novo job</Buttons>
            <Buttons onClick={() => navigate(-1)}>Voltar</Buttons>
            </ButtonsDiv>
        </ScreenContainer>
    )
}

export default SignUpForm;