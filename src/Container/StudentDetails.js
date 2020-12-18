import { Button, MenuItem, TextField } from '@material-ui/core'
import React, { useState, useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { store } from "../Store"
import MaterialStyles from "./Styles";

export default function StudentDetails(props) {

    const Styles = MaterialStyles();
    const [initialData, setinitialData] = useState({ subject: "Hindi", class: "", Marks: "", StudentRollNumber: "Select", StudentName: "Select" })
    const [OverallData, setOverallData] = useState({ subjects: [], class: ["4th", "5th", "6th", "7th", "8th", "9th"] })
    const newSubjectref = useRef();

    const HandleSubjectChange = (e) => {
        const { value } = e.target;


        let mArr = [];



        setOverallData({ ...OverallData, StudentsDetails: mArr })
        setinitialData({ ...initialData, subject: value })


    }
    const HandleClassChange = (e) => {
        const { value } = e.target;
        StudentDetails = JSON.parse(localStorage.getItem("StudentData"))
        setinitialData({ ...initialData, class: value })
    }
    const HandleMarksChange = (e) => {
        const { value } = e.target;
        setinitialData({ ...initialData, Marks: value })
    }
    const StudentNameSelector = (e) => {
        const { value, name } = e.target;
        const Splitedvalue = value.split(" ")
        setinitialData({ ...initialData, StudentName: Splitedvalue[1], StudentRollNumber: Splitedvalue[0] })
    }
    const HandleSaveMarks = () => {
        const temp = initialData;
        const ResultantJson = StudentD;
        const FinalJson = ResultantJson.map(item => {
            if (item.StudentRoll == temp.StudentRollNumber) {
                item = {
                    ...item,
                    subject: { ...item.subject, [temp.subject]: temp.Marks },
                    class: temp.class
                }
            }
            return item
        })
        dispatch({ type: 'StudentUpdatedData', payload: FinalJson })
        props.history.push("/")

    }


    const globalState = useContext(store);
    const { dispatch } = globalState;
    const StudentD = globalState.state.StudentData;
    const SubjectArray = globalState.state.SubjectArr;
    useEffect(() => {
        setOverallData({ ...OverallData, subjects: [...SubjectArray] })
    }, [])
    let newsubject;
    const SubjectChangeHandler = (e) => {
        const { value } = e.target;
        newsubject = value;
    }
    const AddSubjectHandler = () => {
        if (newSubjectref.current.value != "") {
            if (OverallData.subjects.findIndex(item => newsubject.toLowerCase() === item.toLowerCase()) == -1) {
                OverallData.subjects.push(newsubject)
                newSubjectref.current.value = "";
                dispatch({ type: 'SubjectArrayUpdated', payload: OverallData.subjects })
                alert("Subject Added Successfully")
                return true
            }

            else {
                newSubjectref.current.value = "";
                alert("subject already exists")

                return false

            }

        }
        else (
            alert("Field can't be empty")
        )


    }







    return (
        <div className={Styles.MainWrapper}>
            <h1>Enter Student Details Here</h1>
            <TextField
                id="Subject-Name"
                select
                label="Subject"
                variant="outlined"
                value={initialData.subject}
                onChange={HandleSubjectChange}
                placeholder="Subject"

            >
                {OverallData.subjects.map((option, pos) => (
                    <MenuItem key={pos} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="standard-select-currency"
                select
                label="Class"
                placeholder="Select Class of the Student"
                variant="outlined"
                value={initialData.class}
                onChange={HandleClassChange}

            >
                {OverallData.class.map((option, pos) => (
                    <MenuItem key={pos} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="standard-number"
                label="Marks"
                type="number"
                variant="outlined"
                InputProps={{ inputProps: { min: 0, max: 100 } }}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={HandleMarksChange}
            />
            <TextField
                id="standard-select-currency"
                select
                label="Student Name"
                placeholder="Student Name"
                variant="outlined"
                value={`${initialData.StudentRollNumber} ${initialData.StudentName}`}
                onChange={StudentNameSelector}


            >
                {StudentD !== undefined ?
                    StudentD.map((option) => (
                        <MenuItem key={option.StudentRoll} value={`${option.StudentRoll} ${option.StudentName}`}  >
                            {`${option.StudentRoll} ${option.StudentName}`}
                        </MenuItem>
                    )) : <MenuItem key={"null"} value={"Select the student"}>
                        "Select the  student"
                </MenuItem>}

            </TextField>
            <Button onClick={HandleSaveMarks}>Save Data</Button>
            <div className={Styles.AddSubjectWrapper}>
                <h1>Add New Subject</h1>
                <input placeholder="Subject Name" type="text" ref={newSubjectref} onChange={SubjectChangeHandler} />
                <Button onClick={AddSubjectHandler}>Add</Button>
            </div>
            <div className={Styles.LinkWrap}>
                <Link to="/">back to dashboard</Link>
            </div>
        </div>
    )
}
