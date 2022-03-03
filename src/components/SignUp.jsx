import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signup } from '../firebase';

const theme = createTheme();




export default function SignUp() {
  function validateEmail(email) {
    //check if email domain is uf.edu
    const domain = email.split('@')[1];
    if (domain === 'ufl.edu') {
      return true;
    }
    return false;
  }
  
  function validatePassword(password, confirmPassword) {
    //check if password is at least 8 characters and has at least one number
    if (password.length >= 8 && /\d/.test(password)) {
      return true;
    }
    return false;
  }

  function matchPassword(password, confirmPassword) {
    //check if passwords match
    if (password === confirmPassword) {
      return true;
    }
    return false;
  }

  async function handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const info = {
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('cpassword'),
    };

    if (validateEmail(info.email) && validatePassword(info.password, info.confirmPassword) && matchPassword(info.password, info.confirmPassword)) {
      //firebase signup
      try {
        await signup(info.email, info.password);
      }
      catch {
        alert('Error signing up');
      }
    }
    else{
      console.log(validateEmail(info.email));
      console.log(validatePassword(info.password, info.confirmPassword));
      console.log('invalid email or password');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="UF Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="cpassword"
              label="Confirm Password"
              type="password"
              id="cpassword"
              autoComplete="current-password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Link href="/signin" variant="body2">
              {"Already have an account? Sign In"}
            </Link>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}