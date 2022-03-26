import React, { FC } from "react";
import {
  IChoiceGroupOption,
  Text,
} from "@fluentui/react";
import { ControlledChoiceGroup } from "../../controls/ControlledChoiceGroup";

export const ProjectTypeStep: FC<any> = ({options, control, errors}) => {
  const projectTypes = options.projectTypes.map((option: any) => {
    return { key: option.key, text: option.text } as IChoiceGroupOption;
  });

  return (
    <div>
      <Text variant="xLarge">Project Type</Text>
      <ControlledChoiceGroup
        label="Select a type"
        options={projectTypes}
        name="Type"
        required={true}
        control={control}
        errors={errors}
        rules={{ required: "Please select a value" }}
      />
    </div>
  );
};
