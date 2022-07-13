import {styled, TextField} from "@mui/material";

export const CssTextField = styled(TextField)({
    marginBottom: "20px",
    '& label.Mui-focused': {
        color: '#048c04',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#048c04',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#95ff95',
        },
        '&:hover fieldset': {
            borderColor: '#048c04',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#048c04',
        },
    },
});
