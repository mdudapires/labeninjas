export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToCartPage = (navigate) => {
    navigate("/carrinho-de-compras")
}

export const goToSignUpPage = (navigate) => {
    navigate("/cadastro")
}

export const goToContractPage = (navigate) => {
    navigate("/contrate-um-ninja")
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/detalhe/${id}`)
}