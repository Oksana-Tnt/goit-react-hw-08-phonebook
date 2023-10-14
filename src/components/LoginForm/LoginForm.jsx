import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/thunk';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { email: '', password: '' } });

  const email = watch('email');
  const password = watch('password');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <h1>Log in</h1>
      <form
        className="row g-3"
        onSubmit={handleSubmit(data => {
          dispatch(loginThunk(data));
          navigate('/phonebook');
        })}
      >
        <div className="mb-3">
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
          <button type="submit" className="btn btn-primary mb-3">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
