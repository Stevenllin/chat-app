import React from 'react';
import InputAuth from 'app/common/components/Elements/Input';
import FieldErrorMsg from 'app/common/components/Form/FieldErrorMsg';
import { InputAuthTextFieldContainer } from 'assets/styledComponents/Form';
import { ErrorMessage } from '@hookform/error-message';
import { InputAuthTextFieldProps } from './types';

const InputAuthTextField = React.forwardRef<HTMLInputElement, InputAuthTextFieldProps>(({ label, placeholder, asterisk, errors, ...props }, ref) => (
  <InputAuthTextFieldContainer>
    {
      label && (
        <label>{label}</label>
      )
    }
    {
      asterisk && (
        <span className="color-danger">＊</span>
      )
    }
    <InputAuth placeholder={placeholder} {...props} ref={ref} />
    {
      errors && (
        <ErrorMessage
          name={props.name}
          errors={errors}
          render={({ message }) => <FieldErrorMsg>{message}</FieldErrorMsg>}
        />
      )
    }
  </InputAuthTextFieldContainer>
));

InputAuthTextField.displayName = 'InputAuthTextField';

export default InputAuthTextField;