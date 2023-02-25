import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { AuthContainer, AuthCard } from 'assets/styledComponents/Auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { executeLoginAction } from 'app/store/feature/Auth/action';
import { PageValidationSchema } from './validations';
import InputAuthTextField from 'app/common/components/Form/Field/InputAuthTextField';
import { FormValues } from './types';

const Login: React.FC = () => {
  const reduxDispatch = useDispatch();
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      username: '',
      password: ''
    },
    // @ts-ignore
    resolver: yupResolver(PageValidationSchema)
  })
  const handleFormSubmit = reactHookForm.handleSubmit((formValues) => {
    reduxDispatch(executeLoginAction(formValues));
  });
  return (
    <AuthContainer>
      <AuthCard>
        <form className="w-80" onSubmit={handleFormSubmit}>
          <h1 className="my-4">Login</h1>
          <div className="my-4">
            <InputAuthTextField
              label="Username"
              type="text"
              asterisk
              placeholder="Please enter your username"
              {...reactHookForm.register('username')}
              errors={reactHookForm.formState.errors}
            />
          </div>
          <div className="my-4">
            <InputAuthTextField
              label="Password"
              type="password"
              asterisk
              placeholder="Please enter your password"
              {...reactHookForm.register('password')}
              errors={reactHookForm.formState.errors}
            />
          </div>
          <div className="my-4">
            <p className="color-main">Don't have an account? <span className="text-uppercase fw-bold">Register</span></p>
          </div>
          <div className="d-flex justify-content-center my-4">
            <button className="button-main" type="submit">Confirm</button>
          </div>
        </form>
      </AuthCard>
    </AuthContainer>
  )
}

export default Login;
