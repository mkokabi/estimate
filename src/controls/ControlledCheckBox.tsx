import { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as React from 'react';
import { HookFormProps } from './HookFormProps';
import { Checkbox } from '@fluentui/react';

interface ICheckboxInput {
  key: string;
  label: string;
}

export const ControlledCheckBox: FC<HookFormProps & ICheckboxInput> = (props) => {
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
            onChange(checked);
          }}
          name={fieldName}
          defaultChecked={undefined}
        />
      )}
    />
  );
};