import logo from './logo.svg';
import './App.css';
import MoviesList from "./components/MoviesList"
import styled from 'styled-components'
 


const Container= styled.div `
 padding:2rem;
  background-color: #f6f7f9;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
  text-align:center;
  }
`


function App() {
  return (
    <Container>
    <h1 style={{ color:"#8AC5E1" }}>Hello To The Movies App </h1>
   <MoviesList/>
   </Container>
  
   
  );
}

export default App;
