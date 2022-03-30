import React, { FC } from "react";
import { Stack, Text } from "@fluentui/react";
import { ControlledChoiceGroup } from "../controls/ControlledChoiceGroup";
import { IControl } from "../types";
import { ControlledCheckBox } from "../controls/ControlledCheckBox";
import { ControlledTextField } from "../controls/ControlledTextField";

export const ProjectStep: FC<any> = ({ options, control, errors }) => {
  const stackTokens = { childrenGap: 20 };

  return (
    <div>
      <Text variant="xLarge">{`${options.order}. ${options.title}`}</Text>
      <Stack tokens={stackTokens}>
        {options.controls.map((_control: IControl) => {
          if (_control.type === "radio") {
            return (
              <ControlledChoiceGroup
                label="Select an option"
                options={_control.options}
                name={options.key}
                required={true}
                control={control}
                errors={errors}
                rules={{ required: "Please select a value" }}
              />
            );
          } else if (_control.type === "text") {
            return (
              <ControlledTextField
                label={_control.label}
                name={`${options.key}_${_control.key}`}
                required={false}
                control={control}
                errors={errors}
                rules={{ required: "Please enter a value" }}
              />
            );
          } else if (_control.type === "checkbox") {
            return (
              <>
                <Text variant="mediumPlus">Select the components</Text>
                {_control.options?.map((component: any) => (
                  <ControlledCheckBox
                    label={component.text}
                    key={component.key.toString()}
                    control={control}
                    name={`${options.key}_${component.key.toString()}`}
                    errors={undefined}
                  />
                ))}
              </>
            );
          }
          return "";
        })}
      </Stack>
    </div>
  );
};
