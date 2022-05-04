import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Router from './router/Router';
import theme from './constants/theme';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (job) => {
    const newJob = [...cart, job]
    setCart(newJob)
    alert(`O serviço ${job.title} foi adicionado ao carrinho!`)
  }

  const removeFromCart = (id) => {
    const del = window.confirm("Tem certeza que deseja remover este serviço?")
    if(del){
      const filteredCart = cart.filter((job) => {
        return job.id !== id;
      })
      setCart(filteredCart)
    }
  }

  const clearCart = () => {
    setCart([])
    alert("Obrigado por comprar nossos serviços. Volte sempre!")
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Router addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} cart={cart}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
