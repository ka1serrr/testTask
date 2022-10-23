import React, {createContext, useMemo, useState} from 'react';

export const DataContext = createContext()

export const DataProvider = ({children}) => {

	const [data, setData] = useState([123, 54515])
	const value = useMemo(() => ({data, setData}), [data])


	return (
		<DataContext.Provider value={{...value}}>
			{children}
		</DataContext.Provider>
	);
};


