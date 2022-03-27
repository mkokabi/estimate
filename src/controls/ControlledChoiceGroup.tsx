import { ChoiceGroup, IChoiceGroupProps } from "@fluentui/react";
import { FC, useContext } from "react";
import { Controller } from "react-hook-form";
import { AppContext } from "../AppContext";
import { HookFormProps } from "./HookFormProps";

export const ControlledChoiceGroup: FC<HookFormProps & IChoiceGroupProps> = (
  props
) => {
  const context = useContext(AppContext);
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
            const val = {[props.name]: option?.key};
            context.setValues(val);
            onChange(option?.key);
          }}
          onBlur={onBlur}
          defaultValue={undefined}
        />
      )}
    />
  );
};
