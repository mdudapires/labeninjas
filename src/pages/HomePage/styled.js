import styled from 'styled-components';

<a href='https://pngtree.com/so/jobs'>jobs png from pngtree.com/</a>

export const Main = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
padding: 10px;
display: flex;
align-items: center;
margin-left: 10px;
@media(max-width: 600px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 80px;
}
`
export const H2 = styled.h2`
font-weight: 400;
font-size: 28px;
@media(max-width: 600px){
    font-size: large;
    white-space: nowrap;
    }
`
export const H3 = styled.h3`
font-weight: 400;
font-size: 20px;
@media(max-width: 600px){
    font-size: medium;
}
`
export const H4 = styled.h4`
font-weight: 400;
font-size: 18px;
@media(max-width: 600px){
    font-size: small;
}
`

export const Image = styled.img`
width: 500px;
@media(max-width: 600px){
    width: 150px;
    height: 150px;
}
`

export const Buttons = styled.button`
border: 1px solid #ac00e6;
background-color: #ac00e6;
color: white;
font-size: medium;
border-radius: 10px;
text-transform: uppercase;
margin-right: 15px;
padding: 10px;
:hover{
    cursor: pointer;
    background-color: black;
    border: 1px solid black;
    color: white;
}
`
export const ButtonsContainer = styled.div`
@media(max-width: 600px){
    display: flex;

}`
