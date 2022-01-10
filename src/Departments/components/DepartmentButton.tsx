import { ParamListBase, useNavigation } from "@react-navigation/native";
import React, { FC, useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Surface, Title } from 'react-native-paper';
import { DEPARTMENT_EMPLOYEES_ROUTE, DEPARTMENTS, OFFICE_NAME } from "../../utils/consts/consts";
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { DepartmentCode } from "../../common/enums/DepartmentCode";
import { RootStackParamList } from "../../common/navigator/params";

interface Props { department: DepartmentCode, onPress: (department: DepartmentCode) => void; };

const DepartmentButton: FC<Props> = ({ department, onPress }) => {
    const handlePress = useCallback(() => onPress(department), []);

    const name = DEPARTMENTS[department]?.name || OFFICE_NAME;

    return (
        <Surface style={styles.root}>
            <TouchableOpacity style={styles.container} onPress={handlePress}>
                <Title>{name}</Title>
            </TouchableOpacity>
        </Surface>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        elevation: 1,
        borderRadius: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default DepartmentButton;