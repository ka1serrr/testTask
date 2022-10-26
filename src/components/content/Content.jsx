import React, {useContext} from 'react';
import Card from "../card/Card";
import './content.scss'
import {DataContext} from "../../provider/DataProvider";
const Content = () => {

	const {data} = useContext(DataContext)
	return (
		<div className='content'>
			<div className="container">
				{data.map(item => (
					<Card
						{...item}
						key={item.id}
					/>
				))}


			</div>
		</div>
	);
};

export default Content;
