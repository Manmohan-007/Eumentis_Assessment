import MaterialStyles from "./StatisticsStyles";
import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

export default function Statistics() {
    const Styles = MaterialStyles();


    let SubjectDataArr = JSON.parse(localStorage.getItem("temp"))
    let DataObj = {};
    const UpdatedArr = [];
    if (SubjectDataArr != null) {
        for (let i = 0; i < SubjectDataArr.length; i = i + 3) {
            DataObj = {
                SubName: SubjectDataArr[i],
                TotalMarks: SubjectDataArr[i + 1],
                AvgMarks: parseInt(SubjectDataArr[i + 1]) / parseInt(SubjectDataArr[i + 2])

            }
            UpdatedArr.push(DataObj)
        }
    }



    console.log(UpdatedArr, "updated array")



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
            </div>

        </div>
    )
}
