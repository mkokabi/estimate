import React, { FC } from "react";
import {
  Stack,
  Text,
} from "@fluentui/react";
import { ControlledCheckBox } from "../../controls/ControlledCheckBox";

export const DatabaseStep: FC<any> = ({options, control, errors}) => {
  const stackTokens = { childrenGap: 20 };

  return (
    <div>
      <Stack tokens={stackTokens}>
        <Text variant="xLarge">Database Types</Text>
        <Text variant="mediumPlus">Select the database types:</Text>
        {options.databaseTypes.map((component: any) => (
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
