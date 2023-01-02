import { Button, Grid } from '@mui/material'
import React from 'react'

interface Props {
    loginCallback: () => void
}

const Login = (props: Props) => {
    const { loginCallback } = props
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Button onClick={loginCallback}>Begin Adventure</Button>
            </Grid>
        </Grid>
    )
}

export default Login
