import { Button, TextField } from '@material-ui/core'
import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { store } from '../../Store';
import MaterialStyles from "./Style";
export default function Dashboard() {
    const [StudentData, setStudentData] = useState({ StudentName: "", StudentRoll: "" })
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const Styles = MaterialStyles();
    const StudentGlobalData = globalState.state.StudentData;

    const SubjectsList = globalState.state.SubjectArr
    let tempArr = [...SubjectsList]
    let SubjectsMarkobj = {}

    for (var i = 1; i <= tempArr.length; i = (i + 3)) {
        SubjectsMarkobj[tempArr[i - 1]] = []
        tempArr.splice(i, 0, 0)
        tempArr.splice(i + 1, 0, 0)

    }



    const HandleStudentData = (e) => {
        const { id, value } = e.target;
        if (id === "StudentName") {

            setStudentData({ ...StudentData, StudentName: value })
        }
        else if (id === "StudentRoll") {

            setStudentData({ ...StudentData, StudentRoll: value })

        }

    }
    let flag = false;
    const SubmitHandler = () => {

        if (StudentData.StudentRoll !== "" && StudentData.StudentName !== "") {

            StudentGlobalData.map(item => {
                if (item.StudentRoll == StudentData.StudentRoll) {
                    flag = true;
                }
            })
            if (flag !== true) {

                dispatch({ type: 'StudentData', payload: StudentData })
                setStudentData({ StudentName: "", StudentRoll: "" })
            }
            else if (flag == true) {
                setStudentData({ StudentName: "", StudentRoll: "" })
                alert("Student already exist")
                flag = false;
            }
        }
        else {
            alert("Fields can't be empty")
        }


    }
    let studentsubject = [];
    let subjectmarks = 0;
    const RenderedInput = StudentGlobalData.map(item => {
        studentsubject = [];
        subjectmarks = 0;
        if (item.subject !== undefined) {
            const entries = Object.entries(item.subject)
            for (const [subject, marks] of entries) {


                if (tempArr.indexOf(subject) != -1) {
                    SubjectsMarkobj[subject].push(marks)
                    tempArr[tempArr.indexOf(subject) + 1] = parseInt(tempArr[tempArr.indexOf(subject) + 1]) + parseInt(marks)
                    tempArr[tempArr.indexOf(subject) + 2] = parseInt(tempArr[tempArr.indexOf(subject) + 2]) + 1

                }


                studentsubject.push(subject)
                studentsubject.push(marks)

            }



        }
        globalState.state["SubjectMarksObj"] = { ...SubjectsMarkobj }
        globalState.state.SubjectwiseTotalMarks = [...tempArr]


        return (
            <tr key={item.StudentRoll}>
                <td className={Styles.td}>{item.StudentRoll}</td>
                <td className={Styles.td}>{item.StudentName}</td>
                <td className={Styles.td}>{item.class}</td>
                <td className={Styles.td}>
                    {studentsubject.map((item, pos) => {
                        if (pos % 2 === 0) {
                            subjectmarks += parseInt(studentsubject[pos + 1])
                            return (
                                <span key={pos}>{item} : {studentsubject[pos + 1]} , </span>
                            )
                        }



                    })}
                </td>
                <td className={Styles.td}>{subjectmarks}</td>
            </tr>
        )
    })

    return (
        <div className={Styles.MainWrapper}>
            <h1>Dashboard</h1>

            <TextField
                id="StudentName"
                label="Student"
                variant="outlined"
                onChange={HandleStudentData}
                value={StudentData.StudentName}

            />

            <TextField id="StudentRoll"
                label="Roll no."
                variant="outlined"
                onChange={HandleStudentData}
                value={StudentData.StudentRoll}
            />
            <Button onClick={() => { SubmitHandler(); }}>Add Student</Button>
            <div className={Styles.LinkWrapper}>
                <Link to="/StudentDetails" >Edit Student Data</Link>
                <Link to="/Statistics" >Click here to view more Statistics</Link>
            </div>
            <div className={Styles.TableWrapper}>
                <table className={Styles.table}>
                    <thead >
                        <tr key={1}><th className={Styles.th}>StudentRoll</th>
                            <th className={Styles.th}>Student Name</th>
                            <th className={Styles.th}>Class</th>
                            <th className={Styles.th}>Subject</th>
                            <th className={Styles.th}>Student-Wise Total Marks</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            RenderedInput
                        }


                    </tbody>
                </table>
            </div>
        </div >
    )
}
