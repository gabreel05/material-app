import React from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
  Box,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

import { Paper, AppAvatar, Form, Submit } from './theme/index';

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <AppAvatar>
          <LockOutlined />
        </AppAvatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Submit type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Submit>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Paper>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
