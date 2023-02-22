import React from 'react';
import { InputAuthProps } from './type';

const InputAuth = React.forwardRef<HTMLInputElement, InputAuthProps>((props, ref) => (
  <input type={props.type} placeholder={props.placeholder} {...props} ref={ref} />
));
InputAuth.displayName = 'InputAuth';

export default InputAuth;
