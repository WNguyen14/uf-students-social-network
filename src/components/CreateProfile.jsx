import React, { useRef, useState } from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
import Cards from './Card';

const theme = createTheme();

const CreateProfile = ({handleCreateProfile}) => {
  const majorInput = useRef(null);
  const coursesInput = useRef(null);
  const interestsInput = useRef(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [majors, setMajors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [interests, setInterests] = useState([]);

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const validateMajor = () => {
    return majors.length > 0;
  }

  const validateCourses = () => {
    return courses.length > 0;
  }

  const vaildateInterests = () => {
    return interests.length > 2;
  }

  const addMajor = () => {
    if (majorInput.current.value !== '' && !majors.includes(majorInput.current.value)) {
      setMajors([...majors, majorInput.current.value]);
      majorInput.current.value = '';
    }
  }

  const addCourse = () => {
    if (coursesInput.current.value !== '' && !courses.includes(coursesInput.current.value)) {
      setCourses([...courses, coursesInput.current.value]);
      coursesInput.current.value = '';
    }
  }

  const addInterest = () => {
    if (interestsInput.current.value !== '' && !interests.includes(interestsInput.current.value)) {
      setInterests([...interests, interestsInput.current.value]);
      interestsInput.current.value = '';
    }
  }

  function onSubmit(){
    const profile = {
      firstName: firstName,
      lastName: lastName,
      majors: majors,
      courses: courses,
      interests: interests,
    }
    if (validateMajor() && validateCourses() && vaildateInterests() && firstName !== '' && lastName !== '') {
      handleCreateProfile(profile);
    }
    else {
      let err = [];
      if (firstName === '') {
        err.push('First name is required');
      }
      if (lastName === '') {
        err.push('Last name is required');
      }
      if (!validateMajor()) {
        err.push('Please select at least one major');
      }
      if (!validateCourses()) {
        err.push('Please select at least one course');
      }
      if (!vaildateInterests()) {
        err.push('Please select at least three interests');
      }
      alert(err.join('\n'));
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ p: 3, m: 1, bgcolor: 'secondary.main' }}>
              <AccountCircleIcon fontSize={'large'}/>
            </Avatar>
            <Typography component="h1" variant="h4" gutterBottom>
              Create Profile
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 3,
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <TextField
                onChange={onFirstNameChange}
                sx={{
                  marginRight: 1,
                  width: '100%',
                }}
                required
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
              />
              <TextField
                onChange={onLastNameChange}
                sx={{
                  marginLeft: 1,
                  width: '100%',
                }}
                required
                id="lasttName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
              />
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'left',
              mt: 1,
              flexWrap: 'wrap',
            }}>
              {majors.map((major, i) => (
                
                <Cards
                  key={i}
                  text={major}
                  click={() => setMajors(majors.filter((m, j) => i !== j))}
                />
              ))}
            </Box>
            <FormControl sx={{ mt: 1, width: '100%'}} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-majors">Add Major</InputLabel>
              <OutlinedInput
                id="outlined-adornment-majors"
                type={'text'}
                label="Add Major"
                name="majors"
                inputRef={majorInput}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={addMajor}
                      edge="end"
                    >
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'left',
              mt: 1,
              flexWrap: 'wrap',
            }}>
              {courses.map((course, i) => (
                <Cards
                  key={i}
                  text={course}
                  click={() => setCourses(courses.filter((m, j) => i !== j))}
                />
              ))}
            </Box>
            <FormControl sx={{ mt: 1, width: '100%'}} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-courses">Add Course</InputLabel>
              <OutlinedInput
                id="outlined-adornment-courses"
                type={'text'}
                label="Add Course"
                name="courses"
                inputRef={coursesInput}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={addCourse}
                      edge="end"
                    >
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'left',
              mt: 1,
              flexWrap: 'wrap',
            }}>
              {interests.map((interest, i) => (
                <Cards
                  key={i}
                  text={interest}
                  click={() => setInterests(interests.filter((m, j) => i !== j))}
                />
              ))}
            </Box>
            <FormControl sx={{ mt: 1, width: '100%'}} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-interests">Add Interest</InputLabel>
              <OutlinedInput
                id="outlined-adornment-interests"
                type={'text'}
                label="Add Interest"
                name="interests"
                inputRef={interestsInput} 
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={addInterest}
                      edge="end"
                    >
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSubmit}
              sx={{
                mt: 1,
              }}
            >
              Create Profile
            </Button>
          </Box>
      </Container>
      </ThemeProvider>
    </>
  );
}
export default CreateProfile