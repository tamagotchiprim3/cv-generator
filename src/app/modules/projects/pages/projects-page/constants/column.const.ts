import { IColumn } from 'src/app/shared/interfaces/column.interface';

export const PROJECT_COLUMNS: IColumn[] = [
  {
    headerName: 'First name',
    fieldKey: 'name',
    colWidth: '15%',
  },
  {
    headerName: 'Second Name',
    fieldKey: 'secondName',
    colWidth: '15%',
  },
  {
    headerName: 'Team Size',
    fieldKey: 'teamSize',
    colWidth: '10%',
  },
  {
    headerName: 'Specializations',
    fieldKey: 'specializationsNames',
    colWidth: '30%',
  },
  {
    headerName: 'Responsibilities',
    fieldKey: 'responsibilitiesNames',
    colWidth: '30%',
  },
];
