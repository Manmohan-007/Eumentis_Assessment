import React, { createContext, useReducer } from 'react';

const initialState = {
    StudentData: [], SubjectArr: ["Hindi", "Social", "Maths"],
    SubjectwiseTotalMarks: []

};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {

        switch (action.type) {
            case 'StudentData':


                if (action.payload.length != 0) {

                    return {

                        ...state, StudentData:
                            [...state.StudentData, action.payload]
                    }

                }
                else {
                    return { ...state, StudentData: [...state.StudentData] }
                }

            case 'StudentUpdatedData':

                return {
                    ...state, StudentData: action.payload


                }
            case "SubjectArrayUpdated":
                return {
                    ...state, SubjectArr: action.payload
                }
            case "Subjectwisemarksupdated":
                return {
                    ...state, SubjectwiseTotalMarks: action.payload
                }

            default:
                throw new Error();
        };
    }, initialState)

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }