import React, { Fragment } from 'react';
import { Box, Container, Typography } from '@material-ui/core';

const NotFound = () => (
    <Fragment>
        <Box
            style={{
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
                marginTop: '100px',
            }}
        >
            <Container maxWidth='md'>
                <Typography align='center' color='textPrimary' variant='h4'>
                    404: The page you are looking for isn’t here
                </Typography>
                <Typography
                    align='center'
                    color='textPrimary'
                    variant='subtitle2'
                >
                    You either tried some shady route or you came here by
                    mistake. Whichever it is, try using the navigation
                </Typography>
                <Box style={{ textAlign: 'center' }}>
                    <img
                        alt='Under development'
                        src='images/undraw_page_not_found_su7k.svg'
                        style={{
                            marginTop: 50,
                            display: 'inline-block',
                            maxWidth: '100%',
                            width: 560,
                        }}
                    />
                </Box>
            </Container>
        </Box>
    </Fragment>
);

export default NotFound;
