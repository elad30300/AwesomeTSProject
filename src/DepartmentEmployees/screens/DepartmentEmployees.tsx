import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { Text } from "react-native-paper";
import { RootStackParamList } from "../../common/navigator/params";
import { DEPARTMENTS, OFFICE_NAME } from '../../utils/consts/consts';
import { StyleSheet } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, 'DepartmentEmployees'>;

const DepartmentEmployees: FC<Props> = ({ route: { params: { department } }, navigation: { setOptions } }) => {
    const name = DEPARTMENTS[department]?.name || OFFICE_NAME;

    setOptions({ title: name });

    return <Text style={styles.root}>{name}</Text>
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DepartmentEmployees;