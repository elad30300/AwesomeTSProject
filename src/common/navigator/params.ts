import { DepartmentCode } from "../enums/DepartmentCode";
import { NavigatorScreenParams, ParamListBase } from "@react-navigation/native";

export type RootStackParamList = ParamListBase & {
    Departments: unknown;
    DepartmentEmployees: {
        department: DepartmentCode;
    };
    EmployeeIdentification: unknown;
};