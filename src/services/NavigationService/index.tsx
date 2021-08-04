import * as React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';

type RootStackParamList = {
    Home: undefined;
    EnterNotes: undefined;
    DetailedNotes: undefined;
};

const navigationRef = createNavigationContainerRef<RootStackParamList>();

// export const navigate = (name, params) => {
//     navigationRef.current?.navigate(name, params);
// }

// export const replace = (name, params) => {
//     navigationRef.current?.dispatch(StackActions.replace(name, params));
// }
// export const goBack = (name, params) => {
//     navigationRef.current?.goBack(name, params);
// }

// export const push = (...args) => {
//     navigationRef.current?.dispatch(StackActions.push(...args));
// }

// export const pop = (...args) => {
//     navigationRef.current?.dispatch(StackActions.pop(...args));
// }

// export const popToTop = (...args) => {
//     navigationRef.current?.dispatch(StackActions.popToTop());
// }