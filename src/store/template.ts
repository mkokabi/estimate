import { ITemplate } from "../types";

export const template: ITemplate = {
  projectStateStepOptions: {
    order: 1,
    projectStages: [
      { key: "brandNew", text: "Brand New" },
      { key: "update", text: "Update" },
      { key: "migration", text: "Migration" },
      { key: "extension", text: "Extension" },
    ],
  },
  projectTypeStepOptions: {
    order: 2,
    projectTypes: [
      { key: "integration", text: "Integration" },
      { key: "webSite", text: "Web site" },
      { key: "tools", text: "Tools" },
    ],
  },
  projectComponentsStepOptions: {
    order: 3,
    stepDependentOn: "Type==='integration'",
    projectComponents: [
      { key: "backend", text: "Backend" },
      { key: "webInterface", text: "Web Interface" },
      { key: "mobileInterface", text: "Mobile Interface" },
      { key: "database", text: "Database" },
      { key: "hardware", text: "Hardware purchase" },
    ],
  },
  integrationStepOptions: {
    order: 4,
    integrationTypes: [
      { key: "restApi", text: "Rest API" },
      { key: "webService", text: "Web Service" },
      { key: "customer", text: "Custom API" },
    ],
  },
};
