import React, { useEffect } from "react";
import { PeopleTable } from "./components";
import { addPeople } from "@/redux/states";
import { useDispatch } from "react-redux";
import { People } from "@/data";


export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(addPeople(People))
	}, [])

	return (
		<PeopleTable />
	)
}

export default Home;

