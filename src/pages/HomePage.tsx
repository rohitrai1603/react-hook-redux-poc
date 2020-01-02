import { Button ,Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { history } from "../configureStore";

export function HomePage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.centerContainer}>
				<Typography variant="h3" component="h4">
				 	Welcome to Basic Movie Survey
				</Typography>
				<Button
					className={classes.button}
					onClick={() => history.push("/user")}			
					variant="outlined"
				>
					Start Survey
				</Button>
			</div>
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
