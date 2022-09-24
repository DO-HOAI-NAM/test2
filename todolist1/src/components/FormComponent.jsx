import React from 'react';
import { Box, Grid } from '@naterial-ui/core';
import { TextField } from '@material-ui/core';

export default function FormComponent() {
    const handleSumbmit = (e) => {
        e.preventDefault();
         console.log("sumbit form");
    };
    return (
        <Box mt={3}>
            <Grid item sx={12}>
                <form onSubmit={handleSumbmit}>
                    <Box>
                        <typography variant="h5" color="primary">
                            react todo list app
                        </typography>
                    </Box>
                    <Grid container>
                        <Grid item sx={8}>
                            <TextField id="inputTaskField" label="Press enter to add a task" variant="outlined" />
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Box>
    );
};

