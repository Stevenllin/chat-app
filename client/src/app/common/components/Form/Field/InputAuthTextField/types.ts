import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';
import { InputAuthProps } from 'app/common/components/Elements/Input/type';

export interface InputAuthTextFieldProps extends Omit<InputAuthProps, 'name' | 'onChange' | 'onBlur'>, UseFormRegisterReturn {
  label: string;
  type: string;
  asterisk: boolean;
  errors?: FieldErrors;
}
