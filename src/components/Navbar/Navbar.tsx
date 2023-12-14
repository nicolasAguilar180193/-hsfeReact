import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from "react";

export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {

	return (

		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					HSRF REACT
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar;