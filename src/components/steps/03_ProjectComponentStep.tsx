import React, { FC } from "react";
import { Checkbox, Stack, Text } from "@fluentui/react";

export const ProjectComponentStep: FC<any> = ({ options }) => {
  function _onChange(
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    isChecked?: boolean
  ) {
    console.log(`The option has been changed to ${isChecked}.`);
  }
  const stackTokens = { childrenGap: 20 };

  return (
    <div>
      <Stack tokens={stackTokens}>
        <Text variant="xLarge">Project Components</Text>
        <Text variant="mediumPlus">Select the components</Text>
        {options.projectComponents.map((component: any) => (
          <Checkbox label={component.text} onChange={_onChange} />
        ))}
      </Stack>
    </div>
  );
};
