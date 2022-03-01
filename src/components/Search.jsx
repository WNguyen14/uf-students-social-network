import React, { Component } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { Autocomplete } from "@mui/material";
import Paper from "@mui/material/Paper";

const Searching = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

class Search extends React.Component {
  render() {
    return (
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Searching>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <Autocomplete
            id="combo-box-demo"
            options={majors}
            getOptionLabel={(option) => option}
            PaperComponent={({ children }) => (
              <Paper style={{ color: "#ffffff", background: "#444444" }}>
                {children}
              </Paper>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <StyledInputBase
                ref={params.InputProps.ref}
                inputProps={params.inputProps}
                autoFocus
                {...params}
                placeholder="Search for interests/majors/hobbies"
              />
            )}
          />
        </Searching>
      </Box>
    );
  }
}
//note that this list of majors was created manually so some might be missing -wn

const majors = [
  "Accounting",
  "Advertising",
  "Advertising | Persuasive Messaging UF Online",
  "Aerospace Engineering",
  "African Languages",
  "African-American Studies",
  "Agricultural Education and Communication",
  "Agricultural Operations Management",
  "Animal Sciences",
  "Anthropology",
  "Anthropology UF Online",
  "Applied Physiology and Kinesiology",
  "Arabic",
  "Architecture",
  "Art History",
  "Art | BA",
  "Art | BFA",
  "Astronomy and Astrophysics",
  "Biological Engineering",
  "Biology UF Online",
  "Biology | CALS",
  "Biology | CLAS",
  "Biomedical Engineering",
  "Botany | CALS",
  "Botany | CLAS",
  "Business Administration | General Business | BSBA UF Online",
  "Business Administration | General Studies | BABA",
  "Business Administration | General Studies | BABA UF Online",
  "Chemical Engineering",
  "Chemistry | Biochemistry",
  "Chinese",
  "Civil Engineering",
  "Classical Studies",
  "Communication Sciences and Disorders",
  "Communication Sciences and Disorders UF Online",
  "Computer Engineering",
  "Computer Science UF Online",
  "Computer Science | CLAS",
  "Computer Science | Herbert Wertheim College of Engineering",
  "Construction Management",
  "Criminology",
  "Criminology UF Online",
  "Dance | Bachelor of Arts",
  "Dance | Bachelor of Fine Arts",
  "Data Science",
  "Dietetics",
  "Digital Arts and Sciences | Bachelor of Arts",
  "Digital Arts and Sciences | Bachelor of Arts UF Online",
  "Digital Arts and Sciences | Bachelor of Science",
  "Disabilities in Society Specialization",
  "Dual Languages",
  "Economics",
  "Education Sciences",
  "Education Sciences UF Online",
  "Education | Unified Early Childhood Education ProTeach | Pre-K-Grade 3",
  "Educational Psychology and Research",
  "Educational Technology",
  "Electrical Engineering",
  "Elementary Education | Grades K-6",
  "Emergency Management",
  "Emergency Medical Services Management",
  "Engineering | Exploring Engineering Studies",
  "English",
  "Entomology and Nematology",
  "Environmental Engineering",
  "Environmental Management in Agriculture and Natural Resources | Interdisciplinary Studies",
  "Environmental Management in Agriculture and Natural Resources | Interdisciplinary Studies UF Online",
  "Environmental Science",
  "Family, Youth and Community Sciences",
  "Finance",
  "Fire and Emergency Services UF Online",
  "Fire Management",
  "Food and Resource Economics",
  "Food Science",
  "Foreign Languages and Literatures",
  "Forest Resources and Conservation",
  "French and Francophone Studies",
  "General Studies",
  "Geographical Science and Sustainability | BA",
  "Geography",
  "Geography UF Online",
  "Geography | Bachelor of Arts",
  "Geography | Environmental Geosciences",
  "Geology",
  "Geology UF Online",
  "Geomatics",
  "German",
  "Graphic Design",
  "Health Education and Behavior",
  "Health Education and Behavior | Community Health Promotion UF Online",
  "Health Science",
  "Hebrew",
  "Hispanic and Latin American Languages, Literatures and Linguistics",
  "History",
  "Horticultural Science",
  "Industrial and Systems Engineering",
  "Information Systems",
  "Interdisciplinary Studies | CLAS",
  "Interior Design",
  "International Studies",
  "Italian",
  "Japanese",
  "Jewish Studies",
  "Journalism",
  "Journalism | Sports and Media UF Online",
  "Landscape Architecture | 5-Year Professional Program",
  "Linguistics",
  "Management",
  "Marine Sciences | CALS",
  "Marine Sciences | CLAS",
  "Marketing",
  "Materials Science and Engineering",
  "Mathematics",
  "Mechanical Engineering",
  "Media Production, Management, and Technology",
  "Media Production, Management, and Technology | Media and Society UF Online",
  "Microbiology and Cell Science UF Online",
  "Microbiology and Cell Science | CALS",
  "Microbiology and Cell Science | CLAS",
  "Music Education",
  "Music | Bachelor of Arts",
  "Music | Bachelor of Music",
  "Natural Resource Conservation",
  "Nuclear and Radiological Sciences",
  "Nuclear Engineering",
  "Nursing",
  "Nursing | RN to BSN UF Online",
  "Nutritional Sciences",
  "Pharmacy | Preprofessional",
  "Philosophy",
  "Physics",
  "Plant Science",
  "Political Science",
  "Portuguese",
  "Psychology",
  "Psychology UF Online",
  "Public Health",
  "Public Relations",
  "Public Relations UF Online",
  "Religion",
  "Russian",
  "Schools, Society and Policy",
  "Sociology",
  "Sociology UF Online",
  "Soil and Water Sciences",
  "Spanish",
  "Spanish and Portuguese",
  "Sport Management",
  "Sport Management UF Online",
  "Statistics",
  "Sustainability and the Built Environment",
  "Sustainability Studies",
  "Theatre",
  "Theatre Performance",
  "Theatre Production",
  "Tourism, Hospitality and Event Management",
  "Tourism, Hospitality and Event Management UF Online",
  "Wildlife Ecology and Conservation",
  "Women's Studies",
  "Zoology",
];

export default Search;
