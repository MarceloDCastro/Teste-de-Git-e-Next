import { Box } from "@mui/material";
import React from "react";
import { Header } from "../Header";

interface ILayoutProps {
    children?: React.ReactNode;
}

export function Layout ({ children }: ILayoutProps) {
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh'
        }}>
            <Header />
            {children}
        </Box>
    )
}