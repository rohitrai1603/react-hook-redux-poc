import { Button,Typography,Divider,Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { history } from "../configureStore";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/index";

export function ReportPage() {
	const classes = useStyles();
    const user = useSelector((state: RootState) => state.user);
	return (
		<div className={classes.root}>
            <Typography variant="h5" component="h1" gutterBottom>
                Thank You :) 
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {user.name}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.title} color="textSecondary" >
                        {user.email}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.pos} color="textSecondary">
                        {user.country}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                <Typography variant="body2" component="p">
                    {user.gender}
                    <br />
                    {user.age}
                </Typography>
                </Grid>
                <Divider />
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.pos} color="textSecondary">
                        What genre do you like to watch the movie most?
                    </Typography>
                    <Typography variant="body2" component="p">
                        { user.movie && user.movie.favGenre && user.movie.favGenre != "" ? user.movie.favGenre : 'NA' }
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.pos} color="textSecondary">
                    Which is your favourite movie?
                    </Typography>
                    <Typography variant="body2" component="p">
                        { user.movie && user.movie.favMovie && user.movie.favMovie != "" ? user.movie.favMovie : 'NA' }
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.pos} color="textSecondary">
                    Who is your favourite actor?
                    </Typography>
                    <Typography variant="body2" component="p">
                        { user.movie && user.movie.favActor && user.movie.favActor != "" ? user.movie.favActor : 'NA' }
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.pos} color="textSecondary">
                    Who is your favourite actress?
                    </Typography>
                    <Typography variant="body2" component="p">
                        { user.movie && user.movie.favActoress && user.movie.favActoress != "" ? user.movie.favActoress : 'NA' }
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.pos} color="textSecondary">
                    Who is your favourite director?
                    </Typography>
                    <Typography variant="body2" component="p">
                        { user.movie && user.movie.favDirector && user.movie.favDirector != "" ? user.movie.favDirector : 'NA' }
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button
                        className={classes.button}
                        onClick={() => history.push("/user")}			
                        variant="outlined"
                    >
                        New Survey
                    </Button>
                </Grid>
            </Grid>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		height: "100%",
		textAlign: "center",
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
	},

	button: {
		marginTop: 20,
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});