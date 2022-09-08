import React from "react";
import { SxProps, Theme, Typography } from "@mui/material";

interface ITitleProps {
    children: string;
    sx?: SxProps<Theme>;
}

export function Title ({ children, sx }: ITitleProps) {

    return (
        <Typography 
            component='h1'
            sx={{
                fontSize:'30px',
                fontWeight: 'bold',
                ...sx
            }}
        >
            {children}
        </Typography>
    )
}