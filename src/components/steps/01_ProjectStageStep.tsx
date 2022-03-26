import React, { FC } from 'react'
import { ChoiceGroup, IChoiceGroupOption, IComboBoxStyles, Text } from '@fluentui/react';

export const ProjectStageStep: FC<any> = ({options}) => {
  const projectStages = options.projectStages.map((option: any) => {
    return { key: option.key, text: option.text } as IChoiceGroupOption;
  });

  const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };
  
  return (
    <div>
      <Text variant='xLarge'>Project Stage</Text>
      <ChoiceGroup
        label="Select a stage"
        options={projectStages}
        styles={comboBoxStyles}
      />
    </div>
  )
}
