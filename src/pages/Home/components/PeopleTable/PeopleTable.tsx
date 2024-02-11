import React, { useEffect } from "react";
import { Person } from "@/models";
import { addFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

export interface PeopleTableInterface { }

const PeopleTable: React.FC<PeopleTableInterface> = () => {
	const [selectedPeople, setSelectedPeople] = React.useState<Person[]>([])
	const dispatch = useDispatch()
	const pageSize = 5
	const pageSizeOptions = [5, 10, 25]
	const statePeople = useSelector((store: AppStore) => store.people)
	const favoritePeople = useSelector((store: AppStore) => store.favorites);

	const findPerson = (person: Person) => !!favoritePeople.find(p => p.id === person.id)
	const filterPerson = (person: Person) => favoritePeople.filter(p => p.id !== person.id)

	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
		dispatch(addFavorite(filteredPeople))
		setSelectedPeople(filteredPeople)
	}

	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams) => (
				<>{<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />}</>
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

	useEffect(() => {
		setSelectedPeople(favoritePeople)
	}, []);
		
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
			rows={statePeople}
			columns={columns}
			getRowId={(row: any) => row.id}
		/>
	)

}

export default PeopleTable;