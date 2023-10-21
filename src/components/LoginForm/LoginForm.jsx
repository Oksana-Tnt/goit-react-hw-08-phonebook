import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/thunk';

import { Text, useToast } from '@chakra-ui/react';

import {
  FormLabel,
  Input,
  Button,
  Box,
  Center,
  AbsoluteCenter,
} from '@chakra-ui/react';

const LoginForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({ defaultValues: { email: '', password: '' } });

  const dispatch = useDispatch();

  const toast = useToast();

  const onSubmit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .catch(() => {
        toast({
          title: 'Error log in',
          description: 'Please, enter the correct data',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });

    reset();
  };
  return (
    <>
      <AbsoluteCenter axis="both">
        <Box w="200px">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
              placeholder="user@gmail.com"
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
                  message: 'Min length is 6',
                },
              })}
              type="password"
              placeholder="password"
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
