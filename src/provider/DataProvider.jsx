import React, {createContext, useEffect, useMemo, useState} from 'react';
import {GetData} from '../service/ApiService'

export const DataContext = createContext()

export const DataProvider = ({children}) => {


	const getData = new GetData()
	const [data, setData] = useState([])
	const [page, setPage] = useState(199)
	const [loading, setLoading] = useState(true)
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [vacanciesEnded, setVacanciesEnded] = useState(false)

	useEffect(() => {
		onRequest();
	}, [])

	const onRequest = (page) => {
		onItemsListLoading();
		getData.getAllVacancies(page)
			.then(onLoadedData)
	}


	const onItemsListLoading = () => {
		setNewItemLoading(true);
	}

	const onLoadedData = (newVacancies) => {
		let ended = false
		if (page === 202) {
			ended = true
		}
		setData(prevData => [...prevData, ...newVacancies]);
		setLoading(false);
		setNewItemLoading(false);
		setPage(prevPage => prevPage + 1);
		setVacanciesEnded(ended)
	}

	const value = useMemo(() => ({data, setData}), [data])


	return (
		<DataContext.Provider value={{...value, loading, onRequest, vacanciesEnded, newItemLoading, page}}>
			{children}
		</DataContext.Provider>
	);
};


