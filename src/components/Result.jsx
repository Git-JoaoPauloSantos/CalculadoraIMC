import { Box, Alert, AlertTitle } from "@mui/material"
import React from "react"

const Result = ({ result, msg }) => {
    return (
        <React.Fragment>
            <Box sx={{ margin: "2rem", width: '100%' }}>
                <Alert
                    icon={false}
                    variant="filled"
                    severity="success"
                    sx={{ textTransform: 'uppercase' }}>
                    <AlertTitle>resultado</AlertTitle>
                    Seu imc é: <strong>{result}</strong> ( {msg} )
                </Alert>
            </Box>
        </React.Fragment>
    )
}

export default Result