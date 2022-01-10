import React, { FC, useCallback, useEffect, useMemo } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, TextInput as BaseTextInput } from "react-native";
import { Controller, useForm, Control } from 'react-hook-form';
import { RankCode } from "../common/enums/RankCode";
import { DepartmentCode } from "../common/enums/DepartmentCode";
import { TeamCode } from "../common/enums/TeamCode";
import { Button, HelperText, Text, TextInput, useTheme } from "react-native-paper";
import { DatePickerModal } from 'react-native-paper-dates';
import { KeyboardTypeOptions } from "react-native";
import { HEBREW_WORD_REGEX } from "../utils/consts/consts";

interface FormData {
    personalNumber: number;
    firstName: string;
    lastName: string;
    rank: RankCode;
    city: string;
    recruitmentDate?: Date;
    birthDate: Date;
    department: DepartmentCode;
    team: TeamCode;
    quizQuestion?: string;
    isMandatory: boolean;
}

const defaultValues = {
    personalNumber: null,
    firstName: "",
    lastName: "",
    rank: null,
    city: "",
    recruitmentDate: undefined,
    birthDate: null,
    department: null,
    team: null,
    quizQuestion: undefined,
    isMandatory: true
}

const numberOfFields = Object.values(defaultValues).length;

// type FormTextFieldProps<T> = {
//     name: keyof T;
//     label: string;
//     placeholder: string;
//     control: Control<FormData, object>;
//     required: boolean;
//     keyboardType: KeyboardTypeOptions;
//     error: boolean;
// }

// const FormTextField: FC<FormTextFieldProps<FormData>> = ({ label = "", placeholder = "", name, control, required = false, keyboardType = "default", error = false }) => {
//     return (
//         <Controller
//             name={name}
//             control={control}
//             rules={{ required: required }}
//             render={({ field: { onChange, onBlur, value } }) => (
//                 <TextInput
//                     label={label}
//                     mode="outlined"
//                     placeholder={placeholder}
//                     value={value?.toString()}
//                     onBlur={onBlur}
//                     error={error}
//                     onChangeText={onChange}
//                     keyboardType={keyboardType}
//                     style={styles.input}
//                 />)}
//         />
//     );
// }

const EmployeeIdentification: FC = () => {
    const theme = useTheme()

    const { control, handleSubmit, errors, formState: { touched } } = useForm<FormData>({
        defaultValues: defaultValues,
        mode: "all"
    });

    const onSubmit = useCallback(
        (data) => {
            console.log(`submit, errors: ${JSON.stringify(errors)}`);
        },
        [],
    );

    // const hasErrors = useMemo(() => Object.values(errors).length === 0, [errors]);
    // const allFieldsTouched = useMemo(() => Object.values(touched).length === numberOfFields, [touched]);
    const hasErrors = Object.values(errors).length === 0;
    const allFieldsTouched = Object.values(touched).length === numberOfFields;

    const canSubmit = hasErrors && allFieldsTouched;

    console.log(`render - errors: ${JSON.stringify(errors)}`);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Controller
                    name="personalNumber"
                    control={control}
                    rules={{ required: true, minLength: 7, maxLength: 7 }}
                    render={({ onChange, onBlur, value }) => (
                        <>
                            <TextInput
                                label='מספר אישי'
                                mode="outlined"
                                placeholder='מספר אישי'
                                value={value?.toString()}
                                onBlur={onBlur}
                                error={!!errors.personalNumber}
                                onChangeText={onChange}
                                keyboardType="number-pad"
                                style={styles.input}
                            />
                            {errors.personalNumber?.type === "required" && <HelperText type="error">שדה זה הינו חובה</HelperText>}
                            {(errors.personalNumber?.type === "minLength" || errors.personalNumber?.type === "maxLength") && <HelperText type="error">מספר אישי חייב להיות בן 7 ספרות</HelperText>}
                            {!errors.personalNumber && <HelperText type="info" />}
                        </>)
                    }
                />
                <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: true }}
                    render={({ onChange, onBlur, value }) => (
                        <>
                            <TextInput
                                label='שם פרטי'
                                mode="outlined"
                                placeholder='שם פרטי'
                                value={value?.toString()}
                                onBlur={onBlur}
                                error={!!errors.firstName}
                                onChangeText={onChange}
                                style={styles.input}
                            />
                            {errors.firstName?.type === "required" && <HelperText type="error">שדה זה הינו חובה</HelperText>}
                            {!errors.firstName && <HelperText type="info" />}
                        </>
                    )}
                />
                <Controller
                    name="lastName"
                    control={control}
                    rules={{ required: true }}
                    render={({ onChange, onBlur, value }) => (
                        <>
                            <TextInput
                                label='שם משפחה'
                                mode="outlined"
                                placeholder='שם משפחה'
                                value={value?.toString()}
                                onBlur={onBlur}
                                error={!!errors.lastName}
                                onChangeText={onChange}
                                style={styles.input}
                            />
                            {errors.lastName?.type === "required" && <HelperText type="error">שדה זה הינו חובה</HelperText>}
                            {!errors.lastName && <HelperText type="info" />}
                        </>
                    )}
                />
                <Controller
                    name="recruitmentDate"
                    control={control}
                    rules={{ required: true }}
                    render={({ onChange, onBlur, value }) => (
                        <>
                            <TextInput
                                label='תאריך גיוס'
                                mode="outlined"
                                editable={false}
                                // disabled
                                placeholder='תאריך גיוס'
                                value={value?.toString()}
                                onBlur={onBlur}
                                error={!!errors.recruitmentDate}
                                onChangeText={onChange}
                                style={styles.input}
                                secureTextEntry
                                right={<TextInput.Icon name="date" />}
                            />
                            {errors.recruitmentDate?.type === "required" && <HelperText type="error">שדה זה הינו חובה</HelperText>}
                            {!errors.recruitmentDate && <HelperText type="info" />}
                        </>
                    )}
                />
                <View style={styles.submitButtonContainer}>
                    <Button mode="contained" style={styles.submitButton} onPress={handleSubmit(onSubmit)} disabled={!canSubmit}>שלח</Button>
                </View>
            </ScrollView>
        </SafeAreaView >);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    input: {
        width: '100%'
    },
    errorText: {
        color: 'red',
    },
    submitButtonContainer: {
        alignItems: 'center'
    },
    submitButton: {
        width: 100,
    }
});

export default EmployeeIdentification;