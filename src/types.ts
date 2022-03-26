export interface keyTextPair {
  key: string;
  text: string;
}

export interface IProjectStageStepOptions {
  projectStages: keyTextPair[];
}

export interface IProjectTypeStepOptions {
  projectTypes: keyTextPair[];
}

export interface ITemplate {
  projectStateStepOptions: IProjectStageStepOptions;
  projectTypeStepOptions: IProjectTypeStepOptions;
}