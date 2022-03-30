import { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as React from 'react';
import { HookFormProps } from './HookFormProps';
import { ITextFieldProps, TextField } from '@fluentui/react';
import { AppContext } from '../AppContext';

export const ControlledTextField: FC<HookFormProps & ITextFieldProps> = (props) => {
  const context = React.useContext(AppContext);
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      defaultValue={props.defaultValue || ''}
      render={({ field: {onChange, onBlur, value, name: fieldName }}) => (
        <TextField
          {...props}
          onChange={(_e) => {
            const val = {[props.name]: value};
            context.setValues(val);
            onChange(_e);
          }}
          value={value}
          onBlur={onBlur}
          name={fieldName}
          errorMessage={props.errors[fieldName] && props.errors[fieldName].message}
          defaultValue={undefined}
        />
      )}
    />
  );
};