import React from 'react'
import { ChoiceGroup, IChoiceGroupOption, IComboBoxStyles, Text } from '@fluentui/react';

export const ProjectStageStep = () => {
  const projectTypes: IChoiceGroupOption[] = [
    { key: 'brandNew', text: 'Brand New' },
    { key: 'update', text: 'Update' },
    { key: 'migration', text: 'Migration'},
    { key: 'extension', text: 'Extension'},
  ];
  
  const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };
  
  return (
    <div>
      <Text variant='xLarge'>Project Stage</Text>
      <ChoiceGroup
        label="Select a stage"
        options={projectTypes}
        styles={comboBoxStyles}
      />
    </div>
  )
}
