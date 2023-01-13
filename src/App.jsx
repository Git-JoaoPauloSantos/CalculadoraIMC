import { Box } from '@mui/material'
import { Container } from '@mui/system'
import './App.css'
import Form from './components/Form'

function App() {

  return (
    <div className="App">
      <Container 
      maxWidth="xs" 
      sx={{ padding: "2rem",
      backgroundColor: '#42a4f511',
      height: '100vh',
      borderRadius: '15px'}}>
        <Box sx={{height: '30vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: '1.2rem',
        color: '#42a5f5' }}>
          <h1>Calculadora de IMC</h1>
        </Box>
        <Form />
      </Container>
    </div>
  )
}

export default App
