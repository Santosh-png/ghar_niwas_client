import React from 'react'
import { Box } from '@mui/material'

function HorizontalDivider({ children }) {

    return (

        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Box sx={{
                width: "45px",
                backgroundColor: "#292C6A",
                height: "2px",
                // marginBottom: "15px",
                // marginRight: '10px'
            }} />

            {children}

            <Box sx={{
                textAlign: "center",
                height: "50px",
                backgroundColor: "accent.main",
                width: "1px"
            }} />


        </Box>


    )
}

export default HorizontalDivider;