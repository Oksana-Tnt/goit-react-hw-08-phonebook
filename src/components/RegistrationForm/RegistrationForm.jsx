import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  FormLabel,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { loginThunk, signUpThunk } from 'redux/auth/thunk';
import { useDispatch } from 'react-redux';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', email: '', password: '' },
  });

  const dispatch = useDispatch();

  const toast = useToast();

  const onSubmit = data => {
    dispatch(signUpThunk(data));
    dispatch(loginThunk(data));

    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 4000,
      isClosable: true,
    });

    navigate('/phonebook');

    reset();
  };

  return (
    <AbsoluteCenter axis="both">
      <Box display="flex" w="200px" flexDirection="column">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormLabel color="red" textShadow="1px 1px white" mt={5}>
            Name
          </FormLabel>
          <Input
            {...register('name', {
              required: 'This is required',
              minLength: {
                value: 6,
                message: 'Min length is 6',
              },
            })}
            type="text"
            placeholder="username"
            size="md"
            mb={4}
          />
          <Text>{errors.name?.message}</Text>
          <FormLabel color="red" textShadow="1px 1px white">
            Email
          </FormLabel>
          <Input
            {...register('email', {
              required: true,
              minLength: {
                value: 6,
                message: 'Min length is 6',
              },
            })}
            type="email"
            size="md"
            mb={4}
          />
          <Text>{errors.email?.message}</Text>
          <FormLabel color="red" textShadow="1px 1px white">
            Password
          </FormLabel>
          <Input
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Min length is 10',
              },
            })}
            placeholder="password"
            size="md"
            mb={4}
          />
          <Text>{errors.password?.message}</Text>
          <Center>
            <Button type="submit" colorScheme="red" size="sm" width="75px">
              Sign up
            </Button>
          </Center>
        </form>
      </Box>
    </AbsoluteCenter>
  );
};

export default RegistrationForm;
