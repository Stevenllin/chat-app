import React from 'react';
import { useDispatch } from 'react-redux';
import { executeRegisterAction } from 'app/store/feature/Auth/action';
import { useForm } from 'react-hook-form';
import { AuthContainer, AuthCard } from 'assets/styledComponents/Auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { PageValidationSchema } from './validations';
import InputAuthTextField from 'app/common/components/Form/Field/InputAuthTextField';
import { FormValues } from './types';

const Register: React.FC = () => {
  const reduxDispatch = useDispatch();

  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    // @ts-ignore
    resolver: yupResolver(PageValidationSchema)
  });
  const handleFormSubmit = reactHookForm.handleSubmit(async (formValues) => {
    reduxDispatch(executeRegisterAction(formValues));
  });
  return (
    <AuthContainer>
      <AuthCard>
        <form className="w-80" onSubmit={handleFormSubmit}>
          <h1 className="my-4">Register</h1>
          <div className="my-4">
            <InputAuthTextField
              label="Username"
              type="text"
              asterisk
              placeholder="Username"
              {...reactHookForm.register('username')}
              errors={reactHookForm.formState.errors}
            />
          </div>
          <div className="my-4">
            <InputAuthTextField
              label="Email"
              type="text"
              asterisk
              placeholder="Email"
              {...reactHookForm.register('email')}
              errors={reactHookForm.formState.errors}
            />
          </div>
          <div className="my-4">
            <InputAuthTextField
              label="Password"
              type="password"
              asterisk
              placeholder="Password"
              {...reactHookForm.register('password')}
              errors={reactHookForm.formState.errors}
            />
          </div>
          <div className="my-4">
            <InputAuthTextField
              label="Confirm Password"
              type="password"
              asterisk
              placeholder="Confirm Password"
              {...reactHookForm.register('passwordConfirm')}
              errors={reactHookForm.formState.errors}
            />
          </div>
          <div className="d-flex justify-content-center my-4">
            <button className="button-main" type="submit">Confirm</button>
          </div>
        </form>
      </AuthCard>
    </AuthContainer>
  )
}

export default Register;
