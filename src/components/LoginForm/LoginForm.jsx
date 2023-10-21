import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/auth/thunk';
import { useNavigate } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

import {
  FormLabel,
  Input,
  Button,
  Box,
  Center,
  AbsoluteCenter,
} from '@chakra-ui/react';

import authSelectors from 'redux/auth/auth-selectors';

import { useToast } from '@chakra-ui/react';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { email: 'email', password: 'password' } });

  const email = watch('email');
  const password = watch('password');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector(authSelectors.getError);

  const toast = useToast();

  const onSubmit = data => {
    dispatch(loginThunk(data));

    // if (authError) {
    //   toast({
    //     title: 'Error log in',
    //     description: 'Please, enter the correct data',
    //     status: 'error',
    //     duration: 5000,
    //     isClosable: true,
    //   });

    // }
    reset();
  };
  return (
    <>
      <AbsoluteCenter axis="both">
        <Box w="200px">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
              placeholder="user@gmail.com"
              autoComplete="off"
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
                  message: 'Min length is 6',
                },
              })}
              type="password"
              placeholder="password"
              autoComplete="off"
              size="md"
              mb={4}
            />
            <Text>{errors.password?.message}</Text>
            <Center>
              <Button type="submit" colorScheme="red" size="sm" width="75px">
                Log in
              </Button>
            </Center>
          </form>
        </Box>
      </AbsoluteCenter>
    </>
  );
};

export default LoginForm;
