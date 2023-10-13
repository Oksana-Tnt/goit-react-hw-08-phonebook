import { Suspense, useState } from 'react';
import FormContact from 'components/FormContact/FormContact';
import Modal from '../Modal/Modal';
import Header from 'components/Header/Header';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container } from './APP.styled';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Layout from 'components/Layout/Layout';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import PhonebookPage from 'pages/PhonebookPage';

export const App = () => {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/phonebook" element={<Suspense>{<PhonebookPage />}</Suspense>}/> 
          <Route path="/login" element={<Suspense>{<LoginPage />}</Suspense>}/>  
        <Route path="/signUp" element={<Suspense>{<RegisterPage />}</Suspense>}/>  
        </Route > 
        
           |
      </Routes>
      
     
    </Container>
  );
};
