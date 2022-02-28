import { Container, Typography } from '@mui/material';
import React from 'react';
import './assets/App.css';
import RegistrationForm from './components/form/RegistrationForm';

function App() {

  return (
    <Container component="article" maxWidth="sm">
      <Typography className='title' variant='h4' component="h1">Register Form</Typography>
      <RegistrationForm completeForm={sendToDB}/>
    </Container>
  );
}

function sendToDB(data){
  console.log(data);
}

export default App;
