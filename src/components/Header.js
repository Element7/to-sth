import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'
import {
    AppBar, Toolbar, Typography,
    CssBaseline, MenuList, MenuItem, Box
} from '@material-ui/core'
import { withRouter } from "react-router";


const styles = () => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    menulist: {
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'center',
        outline: 'none'
    },
    fullWidth: {
        width: '100%'
    },
    AppBar: {
        width: '100wh'
    }
})


class Header extends Component {

    render() {
        const { location: { pathname } } = this.props

        const classes = styles()
        return (<>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar >
                    <Typography style={classes.fullWidth} variant="h6" align='center' color="inherit" noWrap> Your To-Do App
                        </Typography>
                </Toolbar>
            </AppBar>
            <Box>
                <MenuList style={classes.menulist} >
                    <MenuItem component={NavLink} to='/' selected={'/' === pathname}>
                        Add new task
                            </MenuItem>
                    <MenuItem component={NavLink} to='/list' selected={'/list' === pathname}>
                        Available tasks
                            </MenuItem>
                    <MenuItem component={NavLink} to='/done' selected={'/done' === pathname}>
                        Completed
                             </MenuItem>
                </MenuList>
            </Box>
        </ >
        )
    }
}

export const Head = withRouter(Header)