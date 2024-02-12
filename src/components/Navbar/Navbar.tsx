import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CustomDialog } from '../CustomDialog';
import FavoriteTable from "./FavoriteTable/FavoriteTable";
import { IconButton } from "@mui/material";
import FavoriteIc from '@mui/icons-material/Favorite';
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";

export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {

	const handleClick = () => {
		dialogOpenSubject$.setSubject = true;
	};

	return (
	<>
		<CustomDialog>
			<FavoriteTable />
		</CustomDialog>
		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					HSRF REACT
				</Typography>
				<IconButton color="secondary" aria-label="favorites" component="label" onClick={handleClick}>
					<FavoriteIc />
				</IconButton>
			</Toolbar>
		</AppBar>
	</>
	)
}

export default Navbar;