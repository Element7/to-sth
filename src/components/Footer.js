import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: 'white',
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Container maxWidth="sm" color='primary'>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}