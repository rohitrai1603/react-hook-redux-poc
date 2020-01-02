import { Typography,TextField ,Grid,FormControlLabel,Button,RadioGroup,FormHelperText,Radio,FormLabel,InputLabel,FormControl,Select,MenuItem} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useActions } from "../actions";
import * as UserActions from "../actions/user";
import { history } from "../configureStore";
import { useForm,FieldError } from 'react-hook-form';

export function UserPage() {
	const classes = useStyles();
	const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [gender, setGender] = React.useState("not specified");
    const [country, setCountry] = React.useState("");
    const [age, setAge] = React.useState("");
    const [result, setResult] = React.useState([]);
    const userActions = useActions(UserActions);
    const {
        register, handleSubmit, errors
      } = useForm();
      
    React.useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response:any) => response.json())
        .then(response => setResult( response ))
        .catch(error => console.log(error));
    }, []);
    
    const onSubmit = ()=>{
        userActions.addUser({
            name: firstName + " " +lastName,
            email: email,
            country: country,
            age:age,
            gender:gender,
        });
        history.push("/movie-survey")
    }

	return (
		<div className={classes.root}>
			<form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h6" gutterBottom>
                Personal Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    inputRef={register}
                    error={!!errors.firstName}
                    helperText={errors.firstName && 'First Name is required.'}
                    value={firstName}
			        onChange={(e) => {setFirstName(e.target.value)}}
                    autoComplete="fname"
                />
                {errors.firstName && 'First name is required.'}
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    error={!!errors.lastName}
                    helperText={errors.lastName && 'Last Name is required.'}
                    inputRef={register({ required: true })}
                    fullWidth
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="lname"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email && 'Email is required.'}
                    inputRef={register({ required: true,pattern :/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})}
                    onChange={(e) =>{ console.log(errors);setEmail(e.target.value)}}
                    autoComplete="email"
                />
                 {/* {errors.email && 'Email is required.'} */}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl} error={country == ''}>
                        <InputLabel id="country">
                            Country *
                        </InputLabel>
                        <Select
                            labelId="country"
                            id="country"
                            name="email"
                            value={country}
                            displayEmpty
                            // error={!!errors.country}
                            // helperText={errors.country && 'Country is required.'}
                            className={classes.selectEmpty}
                            onChange={(e) => setCountry(e.target.value as string)}
                        >
                        {result.map((con:any) =>
                        <MenuItem value={con.name}>{con.name}</MenuItem>
                        )}
                        </Select>
                        {country == '' ? <FormHelperText>Country is required.</FormHelperText> :<div/>}
                        
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="age"
                    name="age"
                    label="Age"
                    error={!!errors.age}
                    type ="Number"
                    helperText={errors.age && 'Age is required.'}
                    inputProps={{ min: "0", max: "100", step: "1" }}
                    fullWidth
                    onChange={(e) => setAge(e.target.value as string)}
                />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" onChange={(e) => setGender(e.target.value)}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit" 
                  >
                    Next
                  </Button>
                </Grid>
            </Grid>
			{/* </div> */}
            </form>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		height: "100%",
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
	},

	centerContainer: {
		flex: 1,
		height: "90%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},

	button: {
		marginTop: 20,
    },
    formControl: {
        margin: 1,
        width: '100%',
      },
      selectEmpty: {
        marginTop: 2,
      },
});
