import { ITemplate } from "../types";

export const template: ITemplate = {
  steps: [
    {
      order: 1,
      title: "Project stages",
      key: "Stage",
      controls: [
        {
          type: "radio",
          options: [
            { key: "brandNew", text: "Brand New" },
            { key: "update", text: "Update" },
            { key: "migration", text: "Migration" },
            { key: "extension", text: "Extension" },
          ],
        },
      ],
    },

    {
      order: 2,
      title: "Project types",
      key: "Type",
      controls: [
        {
          type: "radio",
          options: [
            { key: "integration", text: "Integration" },
            { key: "webSite", text: "Web site" },
            { key: "tools", text: "Tools" },
          ],
        },
      ],
    },
    {
      order: 3,
      title: "Project components",
      key: "Components",
      controls: [
        {
          type: "checkbox",
          options: [
            { key: "backend", text: "Backend" },
            { key: "webInterface", text: "Web Interface" },
            { key: "mobileInterface", text: "Mobile Interface" },
            { key: "database", text: "Database" },
            { key: "hardware", text: "Hardware purchase" },
          ],
        },
      ],
    },
    {
      order: 4,
      title: "Integration types",
      key: "Integration",
      stepDependentOn: "Type==='integration'",
      controls: [
        {
          type: "checkbox",
          options: [
            { key: "restApi", text: "Rest API" },
            { key: "webService", text: "Web Service" },
            { key: "customer", text: "Custom API" },
          ],
        },
      ],
    },
    {
      order: 5,
      title: "Database",
      key: "Database",
      stepDependentOn: "database",
      controls: [
        {
          type: "checkbox",
          options: [
            { key: "sql", text: "SQL" },
            { key: "noSql", text: "NoSQL" },
          ],
        },
      ],
    },
  ],
};
