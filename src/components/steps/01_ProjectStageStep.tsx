import React, { FC } from "react";
import { IChoiceGroupOption, Text } from "@fluentui/react";
import { ControlledChoiceGroup } from "../../controls/ControlledChoiceGroup";

export const ProjectStageStep: FC<any> = ({ options, control, errors }) => {
  const projectStages = options.projectStages.map((option: any) => {
    return { key: option.key, text: option.text } as IChoiceGroupOption;
  });

  return (
    <div>
      <Text variant="xLarge">Project Stage</Text>
      <ControlledChoiceGroup
        label="Select a stage"
        options={projectStages}
        name="Stage"
        required={true}
        control={control}
        errors={errors}
        rules={{ required: "Please select a value" }}
      />
    </div>
  );
};
