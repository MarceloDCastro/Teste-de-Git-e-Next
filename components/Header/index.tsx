import React from 'react';
import { Props } from 'next/script';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const projectTitle = 'Teste de Git e Next';

const pages = [
    {
        title: 'Home',
        path: '/'
    }
]

export function Header (props: any) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            {projectTitle}
          </Typography>
          <Divider />
          <List>
            {pages.map(({title, path}) => (
              <ListItem key={`${title}_${path}`} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    return (
        <>
            <AppBar component="nav">
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    {projectTitle}
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {pages.map(({ title, path }) => (
                    <Button key={`${title}_${path}`} sx={{ color: '#fff' }}>
                        {title}
                    </Button>
                    ))}
                </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
                }}
                >
                {drawer}
                </Drawer>
            </Box>
        </>
    )
}