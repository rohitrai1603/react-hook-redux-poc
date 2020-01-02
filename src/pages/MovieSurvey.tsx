import { Typography,TextField ,Grid,FormGroup,Button,FormControlLabel,Checkbox,FormLabel} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { useActions } from "../actions";
import * as UserActions from "../actions/user";
import { history } from "../configureStore";

export function MovieSurveyPage() {
    const classes = useStyles();
    const user = useSelector((state: RootState) => state.user);
    let arr : string[] = [];
    const [favGenre, setFavGenre] = React.useState(arr);
    const [favMovie, setFavMovie] = React.useState("");
    const [favActor, setFavActor] = React.useState("");
    const [favActress, setFavActress] = React.useState("");
    const [favDirector, setFavDirector] = React.useState("");
    const userActions = useActions(UserActions);
	const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        let value =favGenre;
        favGenre.forEach((element,ind) => {
            if(element == name){
                value.splice(ind, 1);
            }
        });
        setFavGenre(value);
      };

    const handleNext = ()=>{
        userActions.addMovie({
            favGenre:favGenre.join()
        });
        history.push("/user-report")
    }

	return (
		<div className={classes.root}>
			{/* <div className={classes.centerContainer}> */}
            <Typography variant="h6" gutterBottom>
                Movie Survey
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                <FormLabel component="legend">What genre do you like to watch the movie most?</FormLabel>
                    <Grid container>
                        <Grid item>
                            <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange('Action')} value="Action" />}
                                label="Action"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange('Adventure')} value="Adventure" />}
                                label="Adventure"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange('Comedy')} value="Comedy" />
                                }
                                label="Comedy"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange('Drama')} value="Drama" />
                                }
                                label="Drama"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange('Fantasy')} value="Fantasy" />
                                }
                                label="Fantasy"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange('Historical')} value="Historical" />
                                }
                                label="Historical"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange('Horror')} value="Horror" />
                                }
                                label="Horror"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange('Romance')} value="Romance" />
                                }
                                label="Romance"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange('Science fiction')} value="Science fiction" />
                                }
                                label="Science fiction"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange('Thriller')} value="Thriller" />
                                }
                                label="Thriller"
                            />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    id="favMovie"
                    name="favMovie"
                    label="Which is your favourite movie?"
                    fullWidth
                    onChange={(e) => setFavMovie(e.target.value)}
                    autoComplete="favMovie"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    id="favActor"
                    name="favActor"
                    label="Who is your favourite actor?"
                    fullWidth
                    onChange={(e) => setFavActor(e.target.value)}
                    autoComplete="favActor"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    id="favActress"
                    name="favActress"
                    label="Who is your favourite actress?"
                    fullWidth
                    onChange={(e) => setFavActress(e.target.value)}
                    autoComplete="favActress"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    id="favDirector"
                    name="favDirector"
                    label="Who is your favourite director?"
                    fullWidth
                    onChange={(e) => setFavDirector(e.target.value)}
                />
                </Grid>
                <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Submit
                  </Button>
                </Grid>
            </Grid>
			{/* </div> */}
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
});
