import { ITemplate } from "../types";

export const template: ITemplate = {
  projectStateStepOptions: {
    projectStages: [
      { key: "brandNew", text: "Brand New" },
      { key: "update", text: "Update" },
      { key: "migration", text: "Migration" },
      { key: "extension", text: "Extension" },
    ],
  },
  projectTypeStepOptions: {
    projectTypes: [
      { key: "integration", text: "Integration" },
      { key: "web site", text: "Web site" },
      { key: "tools", text: "Tools" },
    ],
  },
  projectComponentsStepOptions: {
    projectComponents: [
      { key: "webInterface", text: "Web Interface" },
      { key: "mobileInterface", text: "Mobile Interface" },
      { key: "database", text: "Database" },
      { key: "hardware", text: "Hardware purchase" },
    ],
  },
};