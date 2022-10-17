import { IProject } from './projects.interface';

export interface IEmployee {
  department: string;
  diplomaProfession: string;
  email: string;
  firstName: string;
  id?: string;
  password?: string;
  institution: string;
  languages: ILanguage[];
  lastName: string;
  role: IRole;
  skills: ISkill[];
  skillsNames?: string[];
}

export interface IRole {
  id?: string;
  name: string;
}

export interface ILanguage {
  everydayReadingLevel: ILangLevel;
  everydaySpeakingLevel: ILangLevel;
  everydayWritingLevel: ILangLevel;
  id?: string;
  name: string;
  professionalReadingLevel: ILangLevel;
  professionalSpeakingLevel: ILangLevel;
  professionalWritingLevel: ILangLevel;
}

export interface ILangLevel {
  name: string;
  id: string;
}

export interface ISkill {
  category: {
    name: string;
    id: string;
  };
  experience: number;
  id: string;
  lastUsed: number;
  level: {
    name: string;
    id: string;
  };
  name: string;
}

export interface IGeneral {
  firstName: string;
  lastName: string;
  name: string;
}

export interface IEducation {
  establishment: string;
  profession: string;
}

export interface IResume {
  content: string;
}

export interface ICreateCv {
  user: string;
  name: string;
  description: string;
  projects: IProject[];
}

export interface ICreateCvResponse {
  user: string;
  name: string;
  description: string;
  projects: IProject[];
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

export interface ICreateVirtualCv {
  cvId: string;
  userId: string;
}

export interface ICreateVirtualCvResponse {
  name?: string;
  id: string;
  user?: string;
  data?: any;
}
