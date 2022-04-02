import React from "react";
import {
  IStackProps,
  IStackStyles,
  Stack,
  Text,
  TextField,
} from "@fluentui/react";
import { AppContext } from "../AppContext";

const SummaryStep = () => {
  const context = React.useContext(AppContext);
  const contextValues = context.values;
  const entries = Object.entries(contextValues);

  const stackTokens = { childrenGap: 50 };
  const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
  const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
  };

  const stackTokens1 = { childrenGap: 20 };
  return (
    <>
      <Text variant="xLarge">SummaryStep</Text>
      <Stack tokens={stackTokens1}>
        {entries.map((entry) => (
          <Stack {...columnProps}>
            <TextField
              label={entry[0]}
              value={entry[1] as string}
              underlined
              disabled
              defaultValue="I am disabled"
            />
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default SummaryStep;
