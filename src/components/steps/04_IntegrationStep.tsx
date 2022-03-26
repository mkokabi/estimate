import React, { FC } from "react";
import {
  Stack,
  Text,
} from "@fluentui/react";
import { ControlledCheckBox } from "../../controls/ControlledCheckBox";

export const IntegrationStep: FC<any> = ({options, control, errors}) => {
  const stackTokens = { childrenGap: 20 };

  return (
    <div>
      <Stack tokens={stackTokens}>
        <Text variant="xLarge">Integration Types</Text>
        <Text variant="mediumPlus">Select the integrations</Text>
        {options.integrationTypes.map((component: any) => (
          <ControlledCheckBox 
            label={component.text}
            key={component.key.toString()}
            control={control}
            name={component.key.toString()}
            errors={undefined}
            />
        ))}
      </Stack>
    </div>
  );
};
