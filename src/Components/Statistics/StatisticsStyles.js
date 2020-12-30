import { makeStyles } from "@material-ui/core/styles";

const MaterialStyles =

    makeStyles(theme => ({

        table: {
            fontFamily: "arial, sans-serif",
            borderCollapse: "collapse",
            width: "100%"
        },
        td: {
            border: "1px solid #dddddd", textAlign: "left", padding: "8px"
        }

        ,
        th:
        {
            border: "1px solid #dddddd", textAlign: "left", padding: "8px",
            textAlign: "center"
        }
        ,
        TableWrapper: {
            marginTop: "50px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        table1: {
            fontFamily: "arial, sans-serif",
            borderCollapse: "collapse",
            width: "100%"
        },
        ScoresContainer: {
            marginTop: "85px",
            "& > h2": {
                marginBottom: "32px",
                textDecoration: "underline"
            }

        }



    }));


export default MaterialStyles; 