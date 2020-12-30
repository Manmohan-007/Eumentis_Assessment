import MaterialStyles from "./StatisticsStyles";
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { store } from '../../Store';
export default function Statistics() {
    const Styles = MaterialStyles();
    const globalState = useContext(store);
    let StudentData = globalState.state.StudentData;
    let SubjectDataArr = globalState.state.SubjectwiseTotalMarks;
    let DataObj = {};
    const UpdatedArr = [];
    let SubjectMarkObj = globalState.state.SubjectMarksObj;

    for (let val in SubjectMarkObj) {
        var temp = SubjectMarkObj[val].sort(function (a, b) { return b - a }).slice(0, 3)
        SubjectMarkObj[val] = [...temp]
    }
    var SubjectMarkObjNewArr = SubjectMarkObj;

    for (let i = 0; i < StudentData.length; i++) {
        if (StudentData[i].subject !== null && StudentData[i].subject !== undefined) {
            const entries = Object.entries(StudentData[i].subject)
            for (let j in entries) {
                const temp = (SubjectMarkObj[entries[j][0]])
                SubjectMarkObjNewArr[entries[j][0]].splice(temp.indexOf((entries[j][1])), 1, StudentData[i].StudentName)
            }
        }
    }

    let NewSubjectMarkArr = [];
    if (SubjectMarkObjNewArr !== null && SubjectMarkObjNewArr !== undefined) {
        NewSubjectMarkArr = Object.entries(SubjectMarkObjNewArr)
    }

    if (SubjectDataArr != null && SubjectDataArr != undefined) {
        for (let i = 0; i < SubjectDataArr.length; i = i + 3) {
            DataObj = {
                SubName: SubjectDataArr[i],
                TotalMarks: (SubjectDataArr[i + 1]),
                AvgMarks: ((SubjectDataArr[i + 1]) / parseInt(SubjectDataArr[i + 2])).toString()

            }
            UpdatedArr.push(DataObj)
        }
    }








    return (
        <div>
            <h1>Statistics </h1>
            <Link to="/" > Back to Home </Link>
            <div className={Styles.TableWrapper}>
                <table className={Styles.table}>
                    <thead >
                        <tr>
                            <th className={Styles.th}>Subject Name</th>
                            <th className={Styles.th}>Subject Total Marks</th>
                            <th className={Styles.th}>Subject-wise Average Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {UpdatedArr.map((item, pos) => {
                            return (
                                <tr key={pos}>
                                    <td className={Styles.td}>{item.SubName}</td>
                                    <td className={Styles.td}>{item.TotalMarks}</td>
                                    <td className={Styles.td}>{item.AvgMarks}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className={Styles.ScoresContainer}>
                    <h2>Subject Wise Top Scorers Data</h2>

                    <table className={Styles.table1}>

                        <thead >
                            <tr>
                                <th className={Styles.th}>Subject Name</th>
                                <th colSpan="3" className={Styles.th}>Subject wise Top 3 Scorers</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                NewSubjectMarkArr.map((item, pos) => {
                                    return (
                                        <tr key={pos}>
                                            <td className={Styles.td}>{item[0]}</td>
                                            {item[1].map((item, pos) => {
                                                return (<td key={pos} className={Styles.td}>{pos + 1}. {item}</td>)
                                            })}

                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
