import { makeStyles } from "@material-ui/core/styles";

const MaterialStyles =

    makeStyles(theme => ({

        MainWrapper: {
            "& .MuiInputBase-root": {
                marginRight: "10px",
            },
            "& .MuiButton-root": {
                backgroundColor: "lightgrey",
                marginRight: "10px",

            }
        },

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
            { border: "1px solid #dddddd", textAlign: "left", padding: "8px" }
        ,
        TableWrapper: {
            marginTop: "50px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        LinkWrapper: {
            marginTop: "46px",
            marginLeft: "-86px"
        }




    }));


export default MaterialStyles; 