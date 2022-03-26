import { ChoiceGroup, IChoiceGroupProps } from "@fluentui/react";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { HookFormProps } from "./HookFormProps";

export const ControlledChoiceGroup: FC<HookFormProps & IChoiceGroupProps> = (
  props
) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      defaultValue={props.defaultValue || ''}
      render={({ field: {onChange, onBlur, value, name: fieldName } }) => (
        <ChoiceGroup
          {...props}
          selectedKey={value}
          onChange={(_e, option) => {
            onChange(option?.key);
          }}
          onBlur={onBlur}
          defaultValue={undefined}
        />
      )}
    />
  );
};
