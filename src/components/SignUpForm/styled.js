import styled from 'styled-components';

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.h2`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 300;
`

export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
width: 60vw;
max-width: 450px;
align-items: center;
margin-bottom: 12px;
`

export const ButtonsDiv = styled.div`
display: flex;
`


export const Buttons = styled.button`
border: 1px solid #ac00e6;
background-color: #ac00e6;
color: white;
font-size: medium;
border-radius: 10px;
text-transform: uppercase;
margin-right: 15px;
padding: 5px;
:hover{
    cursor: pointer;
    background-color: black;
    border: 1px solid black;
    color: white;
}
`
