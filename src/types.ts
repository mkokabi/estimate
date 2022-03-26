export interface IKeyTextPair {
  key: string;
  text: string;
}

export interface IProjectStageStepOptions {
  projectStages: IKeyTextPair[];
}

export interface IProjectType extends IKeyTextPair
{
  dependentSteps?: string[]
}

export interface IProjectTypeStepOptions {
  projectTypes: IProjectType[];
}

export interface IProjectComponentsStepOptions {
  projectComponents: IKeyTextPair[];
}

export interface IIntegrationStepOptions {
  integrationTypes: IKeyTextPair[];
}

export interface ITemplate {
  projectStateStepOptions: IProjectStageStepOptions;
  projectTypeStepOptions: IProjectTypeStepOptions;
  projectComponentsStepOptions: IProjectComponentsStepOptions;
  integrationStepOptions: IIntegrationStepOptions
}