import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')
    return (

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />

                        </IconButton>

                            <nav id={'hw5-menu'} className={s.nav}>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <NavLink
                                    id={'hw5-pre-junior-link'}
                                    to={PATH.PRE_JUNIOR}
                                    onClick={handleClose}
                                    // className={...} // делает студент
                                >
                                    Pre-junior
                                </NavLink>
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <NavLink
                                    id={'hw5-junior-link'}
                                    to={PATH.JUNIOR}
                                    onClick={handleClose}
                                    // className={...} // делает студент
                                >
                                    Junior
                                </NavLink>
                                </Typography>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <NavLink
                                    id={'hw5-junior-plus-link'}
                                    to={PATH.JUNIOR_PLUS}
                                    onClick={handleClose}
                                    // className={...} // делает студент
                                >
                                    Junior Plus
                                </NavLink>
                                    </Typography>
                            </nav>

                        <Button color="inherit">Login</Button>

                    </Toolbar>
                </AppBar>


            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={s.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                    />
                </button>


            </aside>
            </Box>
    )
}
