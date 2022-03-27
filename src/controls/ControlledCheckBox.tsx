import { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as React from 'react';
import { HookFormProps } from './HookFormProps';
import { Checkbox } from '@fluentui/react';
import { AppContext } from '../AppContext';

interface ICheckboxInput {
  key: string;
  label: string;
}

export const ControlledCheckBox: FC<HookFormProps & ICheckboxInput> = (props) => {
  const context = React.useContext(AppContext);
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      defaultValue={props.defaultValue || ''}
      render={({ field: {onChange, value, name: fieldName }}) => (
        <Checkbox
          {...props}
          onChange={(_e, checked)=> {
            const val = {[props.name]: checked};
            context.setValues(val);
            onChange(checked);
          }}
          name={fieldName}
          defaultChecked={undefined}
        />
      )}
    />
  );
};