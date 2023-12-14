import React from "react";
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from "@/data";

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
	const pageSize = 5
	const pageSizeOptions = [5, 10, 25]
	const columns = [
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