import { makeStyles } from "@material-ui/core/styles";

const MaterialStyles =

    makeStyles(theme => ({

        MainWrapper: {
            "& .MuiInputBase-root": {
                marginRight: "10px",
                width: "154px"
            },
            "& .MuiButton-root": {
                backgroundColor: "lightgrey",
                marginRight: "10px",

            },
            "& >h1": {
                marginBottom: "58px"
            }
        },
        AddSubjectWrapper: {
            marginTop: "45px",
            marginRight: "29%",
            "& > input": {

                marginRight: "10px",
                padding: "6px 8px",
                borderRadius: "8px",
                border: "0.8px solid grey",
                outline: "none"
            }
        },
        LinkWrap: {
            position: "fixed",
            top: "28px",
            right: "30px"
        }




    }));


export default MaterialStyles; 