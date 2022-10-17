import { IColumn } from 'src/app/shared/interfaces/column.interface';

export const EMPLOYEE_COLUMNS: IColumn[] = [
  {
    headerName: 'First name',
    fieldKey: 'firstName',
    colWidth: '15%',
  },
  {
    headerName: 'Last name',
    fieldKey: 'lastName',
    colWidth: '15%',
  },
  {
    headerName: 'Email',
    fieldKey: 'email',
    colWidth: '25%',
  },
  {
    headerName: 'Department',
    fieldKey: 'department',
    colWidth: '15%',
  },
  {
    headerName: 'Skills',
    fieldKey: 'skillsNames',
    colWidth: '30%',
  },
];
