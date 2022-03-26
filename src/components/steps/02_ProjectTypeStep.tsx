import React, { FC } from "react";
import {
  ChoiceGroup,
  IChoiceGroupOption,
  IComboBoxStyles,
  Text,
} from "@fluentui/react";

export const ProjectTypeStep: FC<any> = ({options}) => {
  const projectTypes = options.projectTypes.map((option: any) => {
    return { key: option.key, text: option.text } as IChoiceGroupOption;
  });

  const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };

  return (
    <div>
      <Text variant="xLarge">Project Type</Text>
      <ChoiceGroup
        label="Select a type"
        options={projectTypes}
        styles={comboBoxStyles}
      />
    </div>
  );
};
