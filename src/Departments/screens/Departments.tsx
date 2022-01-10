import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { Button, FAB, IconButton, Surface, useTheme } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { DepartmentCode } from '../../common/enums/DepartmentCode';
import { RootStackParamList } from '../../common/navigator/params';
import { DEPARTMENT_EMPLOYEES_ROUTE, EMPLOYEE_IDENTIFICATION_ROUTE } from '../../utils/consts/consts';
import DepartmentButton from '../components/DepartmentButton';

type Props = NativeStackScreenProps<RootStackParamList, "Department">;

const DepartmentContainer: FC<ViewProps> = ({ children }) => {
    return (
        <View style={styles.departmentContainer} >
            {children}
        </View>
    )
}

const Departments: FC<Props> = ({ navigation }) => {
    const { colors: { background } } = useTheme();

    const onCameraPressed = useCallback(
        () => {
            navigation.push(EMPLOYEE_IDENTIFICATION_ROUTE);
        },
        [],
    )

    const handleDepartmentPressed = useCallback((department: DepartmentCode) =>
        navigation.push(DEPARTMENT_EMPLOYEES_ROUTE, {
            department: department
        })
        , []
    );

    return (
        <View style={[styles.root, { backgroundColor: background }]}>
            <View style={styles.departmentListContainer}>
                <DepartmentContainer>
                    <DepartmentButton department={DepartmentCode.NO_DEPARTMENT} onPress={handleDepartmentPressed} />
                </DepartmentContainer>
                <DepartmentContainer>
                    <DepartmentButton department={DepartmentCode.FOURTHY_THREE} onPress={handleDepartmentPressed} />
                </DepartmentContainer>
                <DepartmentContainer>
                    <DepartmentButton department={DepartmentCode.MAGEN} onPress={handleDepartmentPressed} />
                </DepartmentContainer>
                <DepartmentContainer>
                    <DepartmentButton department={DepartmentCode.EVEREST} onPress={handleDepartmentPressed} />
                </DepartmentContainer>
                <DepartmentContainer>
                    <DepartmentButton department={DepartmentCode.HANDASAT_MAAREHET} onPress={handleDepartmentPressed} />
                </DepartmentContainer>
            </View>
            <IconButton icon="camera" color='#121212' style={styles.cameraButton} onPress={onCameraPressed} />
        </View >
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center'
    },
    departmentListContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    departmentContainer: {
        height: 200,
        width: '50%',
        padding: 16,
    },
    cameraButton: {
        backgroundColor: '#BB86FC',
        width: 60,
        height: 60,
        borderRadius: 60,
        margin: 16,
    }
});

export default Departments;