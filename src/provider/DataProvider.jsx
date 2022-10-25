import React, {createContext, useEffect, useMemo, useState} from 'react';
import axios from 'axios'
import {GetData} from '../service/ApiService'

export const DataContext = createContext()

export const DataProvider = ({children}) => {


	const getData = new GetData()
	const [data, setData] = useState([])

	useEffect(() => {
		getData.getAllVacancies().then(res => setData(res))
	}, [])

	const value = useMemo(() => ({data, setData}), [data])


	return (
		<DataContext.Provider value={{...value}}>
			{children}
		</DataContext.Provider>
	);
};


