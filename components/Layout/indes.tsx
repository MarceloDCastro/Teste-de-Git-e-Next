import { Box } from "@mui/material";
import React from "react";
import { Header } from "../Header";

interface ILayoutProps {
    children?: React.ReactNode;
}

export function Layout ({ children }: ILayoutProps) {
    const DefaultContainer = ({ children }: ILayoutProps) => (
        <Box component='main' sx={{
            width: '100%',
            height: '100%'
        }}>
            {children}
        </Box>
    )

    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            px: '3%',
            pt: '80px'
        }}>
            <Header />
            <DefaultContainer>
                {children}
            </DefaultContainer>
        </Box>
    )
}