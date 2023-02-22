import React from 'react';
import { InputAuthTextFieldContainer } from 'assets/styledComponents/Form';
import InputAuth from 'app/common/components/Elements/Input';
import { InputAuthTextFieldProps } from './types';

const InputAuthTextField = React.forwardRef<HTMLInputElement, InputAuthTextFieldProps>(({label, placeholder, asterisk, ...props}, ref) => (
  <InputAuthTextFieldContainer>
    {
      label && (
        <label>{label}</label>
      )
    }
    {
      asterisk && (
        <span>123</span>
      )
    }
    <InputAuth placeholder={placeholder} {...props} ref={ref} />
  </InputAuthTextFieldContainer>
));

InputAuthTextField.displayName = 'InputAuthTextField';

export default InputAuthTextField;