import styled from 'styled-components';


export const FiltersContainer = styled.div`
display: flex;
align-items: center;

`

export const JobsListContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
margin: 12px;
@media(max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
}
    
`
export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20px;
`
export const Inputs = styled.div`
margin-right: 10px;
@media(max-width: 600px){
    margin-right: 5px;
    margin-left: 5px;
}
`