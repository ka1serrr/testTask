import React, {useContext} from 'react';
import Card from "../card/Card";
import './content.scss'
import {DataContext} from "../../provider/DataProvider";
import Loader from "../loader/Loader";
import Button from "../UI/button/Button";
const Content = () => {

	const {data, loading, onRequest, vacanciesEnded, newItemLoading, page} = useContext(DataContext)

	const loader = loading ? <Loader/> : null;
	const content = !loading ? data.map(item => (
			<Card
				{...item}
				key={item.id}
			/>
		)) : null

	return (
		<div className='content'>
			<div className="container">
				{loader}
				{content}
				<div className="content__btn">
					{vacanciesEnded ? null :
						<Button
							disabled={newItemLoading}
							onRequest={() => onRequest(page)}
							className={'btn'}
							text={'Show more'}
						/>
					}
				</div>
			</div>
		</div>
	);

};

export default Content;
