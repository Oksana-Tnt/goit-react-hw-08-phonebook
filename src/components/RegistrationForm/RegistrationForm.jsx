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
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: 'user', email: 'email', password: 'password' },
  });

  const name = watch('name');
  const email = watch('email');
  const password = watch('password');

  const dispatch = useDispatch();

  const toast = useToast();

  const onSubmit = data => {
    dispatch(signUpThunk(data));
    dispatch(loginThunk({ email, password }));

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel color="red" textShadow="1px 1px black">
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
            autoComplete="username"
            size="md"
            mb={4}
          />
          <Text>{errors.name?.message}</Text>
          <FormLabel color="red" textShadow="1px 1px black">
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
            autoComplete="email"
            size="md"
            mb={4}
          />
          <Text>{errors.email?.message}</Text>
          <FormLabel color="red" textShadow="1px 1px black">
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
            autoComplete="password"
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
