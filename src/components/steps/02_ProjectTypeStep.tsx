import React from 'react'
import { ChoiceGroup, IChoiceGroupOption, IComboBoxStyles, Text } from '@fluentui/react';

export const ProjectTypeStep = () => {
  const projectTypes: IChoiceGroupOption[] = [
    { key: 'integration', text: 'Integration' },
    { key: 'web site', text: 'Web site' },
    { key: 'tools', text: 'Tools'},
  ];
  
  const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };
  
  return (
    <div>
      <Text variant='xLarge'>Project Type</Text>
      <ChoiceGroup
        label="Select a type"
        options={projectTypes}
        styles={comboBoxStyles}
      />
    </div>
  )
}
