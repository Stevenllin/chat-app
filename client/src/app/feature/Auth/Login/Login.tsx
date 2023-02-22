import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthContainer, AuthCard } from 'assets/styledComponents/Auth';
import InputAuthTextField from 'app/common/components/Form/Field/InputAuthTextField';
import { FormValues } from './types';

const Login: React.FC = () => {
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      account: '',
      password: ''
    }
  })
  const handleFormSubmit = reactHookForm.handleSubmit((formValues) => {
    console.log(formValues);
  });
  return (
    <AuthContainer>
      <AuthCard>
        <form className="w-80" onSubmit={handleFormSubmit}>
          <h1>Login</h1>
          <InputAuthTextField
            label="Account"
            asterisk
            placeholder="Please enter your account"
            {...reactHookForm.register('account')}
            errors={reactHookForm.formState.errors}
          />
          <InputAuthTextField
            label="Password"
            asterisk
            placeholder="Please enter your password"
            {...reactHookForm.register('password')}
            errors={reactHookForm.formState.errors}
          />
          <div className="d-flex justify-content-center">
            <button type="submit">Login</button>
          </div>
        </form>
      </AuthCard>
    </AuthContainer>
  )
}

export default Login;
