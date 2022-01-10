import { DepartmentCode } from "../../common/enums/DepartmentCode";
import { TeamCode } from "../../common/enums/TeamCode";

export const HEBREW_WORD_REGEX = /[א-ת]+/i;

export const DEPARTMENTS_ROUTE = "Departments";
export const DEPARTMENT_EMPLOYEES_ROUTE = "DepartmentEmployees";
export const EMPLOYEE_IDENTIFICATION_ROUTE = "EmployeeIdentification";

export const OFFICE_NAME = 'לשכה';

export const DEPARTMENTS = {
    [DepartmentCode.FOURTHY_THREE]: {
        name: '43',
        teams: [TeamCode.AKELA, TeamCode.ARTEMIS]
    },
    [DepartmentCode.MAGEN]: {
        name: 'מגן',
        teams: [TeamCode.FIURY, TeamCode.PICASSO, TeamCode.PASSES]
    },
    [DepartmentCode.EVEREST]: {
        name: 'אוורסט',
        teams: [TeamCode.ROIM_RAHOK, TeamCode.ATLAS_A, TeamCode.ATALS_B, TeamCode.YUVAL]
    },
    [DepartmentCode.HANDASAT_MAAREHET]: {
        name: 'הנדסת מערכת',
        teams: [TeamCode.GENESYS, TeamCode.OPAL, TeamCode.CRYPTONITE, TeamCode.HAFAALA_MIVZAIT]
    },
}