export interface IProject {
  id?: string;
  description: string;
  name: string;
  secondName: string;
  startDate: Date;
  endDate: Date;
  teamSize: number;
  tasksPerformed: string;
  projectRoles: ICascaderOption[];
  specializations: ICascaderOption[];
  responsibilities: ICascaderOption[];
  projectRolesNames?: string[];
  specializationsNames?: string[];
  responsibilitiesNames?: string[];
}

export interface ICascaderOption {
  name: string;
  id: string;
}
