export interface IKeyTextPair {
  key: string;
  text: string;
}

export interface IControl {
  type: string;
  options: IKeyTextPair[];
}

export interface IStep {
  order: number;
  title: string;
  key: string;
  stepDependentOn?: string;
  controls?: IControl[];
}

export interface IProjectStageStepOptions extends IStep {
  // projectStages: IKeyTextPair[];
}

export interface IProjectType extends IKeyTextPair
{
}

export interface IProjectTypeStepOptions extends IStep  {
  // projectTypes: IProjectType[];
}

export interface IProjectComponentsStepOptions extends IStep  {
  projectComponents: IKeyTextPair[];
}

export interface IIntegrationStepOptions extends IStep  {
  integrationTypes: IKeyTextPair[];
}

export interface IDatabaseStepOptions extends IStep {
  databaseTypes: IKeyTextPair[];
}

export interface ITemplate {
  steps: IStep[];
}