/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Button, DefaultTheme as PaperDefaultTheme, FAB, Provider as PaperProvider, } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import Departments from './src/Departments/screens/Departments';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DEPARTMENTS_ROUTE, DEPARTMENT_EMPLOYEES_ROUTE, EMPLOYEE_IDENTIFICATION_ROUTE } from './src/utils/consts/consts';
import DepartmentEmployees from './src/DepartmentEmployees/screens/DepartmentEmployees';
import { RootStackParamList } from './src/common/navigator/params';
import { DepartmentCode } from './src/common/enums/DepartmentCode';
import EmployeeIdentification from './src/EmployeeIdentification/EmployeeIdentification';

const theme: Theme = {
  ...PaperDefaultTheme,
  dark: true,
  mode: 'adaptive',
  colors: {
    ...PaperDefaultTheme.colors,
    background: '#121212',
    surface: '#121212',
    text: '#FFF',
    primary: '#BB86FC',
    placeholder: '#727272'
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={{ ...NavigationDefaultTheme, dark: true, colors: { ...NavigationDefaultTheme.colors, background: '#121212', card: "#1f1f1f", text: "#fff" } }}>
        <Stack.Navigator>
          <Stack.Screen name={DEPARTMENTS_ROUTE} component={Departments} options={{ title: 'AkelaEvenApp' }} />
          <Stack.Screen name={DEPARTMENT_EMPLOYEES_ROUTE} component={DepartmentEmployees} />
          <Stack.Screen name={EMPLOYEE_IDENTIFICATION_ROUTE} component={EmployeeIdentification} options={{ title: 'זיהוי משרת' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
});

export default App;
