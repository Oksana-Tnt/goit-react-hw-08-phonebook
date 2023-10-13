import { useToast } from '@chakra-ui/react'
import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signUp } from 'redux/auth-service';

import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', email: '', password: '' } });

  const name = watch('name');
  const email = watch('email');
  const password = watch('password');
  const toast = useToast();
  return (
    <>
      <h1>RegistrationForm</h1>
      <form
        className="row g-3"
        onSubmit={handleSubmit(data => {
          signUp(data)
            .then(() => {
               
               navigate('/login');
            })
            .catch(err => console.log(err));
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              });
        })}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            {...register('name', {
              required: 'This is required',
              minLength: {
                value: 6,
                message: 'Min length is 6',
              },
            })}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="username"
          />
          <p>{name}</p>
          <p>{errors.name?.message}</p>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            {...register('email', {
              required: true,
              minLength: {
                value: 6,
                message: 'Min length is 6',
              },
            })}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="email"
          />
          <p>{email}</p>
          <p>{errors.email?.message}</p>
        </div>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          {...register('password', {
            required: true,
            minLength: {
              value: 6,
              message: 'Min length is 6',
            },
          })}
          type="password"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="password"
        />
        <p>{password}</p>
        <p>{errors.password?.message}</p>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary mb-3"          
          >
            
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
