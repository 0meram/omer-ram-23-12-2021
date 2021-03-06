import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./nav.css";

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar className="nav">
					<h1>Herolo Wether</h1>
					<Button color="inherit" >
						<Link to="/">Forecast</Link>
					</Button>
					<Button color="inherit">
						<Link to="/favorites">Favorites</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
