import React from "react";
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from "@/data";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
	const [selectedPeople, setSelectedPeople] = React.useState<Person[]>([])
	const pageSize = 5
	const pageSizeOptions = [5, 10, 25]

	const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id)
	const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id)

	const handleChange = (person: Person) => {
		setSelectedPeople(findPerson(person) ? 
			filterPerson(person) : [...selectedPeople, person]
		)
	}

	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams) => (
				<>{<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)}/>}</>
			)
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>

		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'levelOfHappiness',
			headerName: 'Happiness',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}
	]

	return (
		<DataGrid
			disableColumnSelector
			disableRowSelectionOnClick
			disableDensitySelector
			autoHeight
			initialState={{
				pagination: { paginationModel: { pageSize: pageSize } },
			}}
			pageSizeOptions={pageSizeOptions}
			rows={People}
			columns={columns}
			getRowId={(row: any) => row.id}
		/>
	)
}

export default Home;