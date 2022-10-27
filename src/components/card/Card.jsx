import React, {useEffect, useRef, useState} from 'react';
import cn from "classnames";

import './card.scss'
import noImage from './resources/no-image-icon-15.png'

const Card = ({title, form, companyImg, address, company, web, responsibility, requirement, salaryStart}) => {

	const [isMore, setIsMore] = useState(true)

	const [ulHeight, setUlHeight] = useState(0)
	const height = useRef(null)

	const showMore = () => {
		setIsMore(!isMore)
	}

	const getUlResize = () => {
		setUlHeight(height.current.clientHeight)
	}

	useEffect(() => {
		getUlResize()
	}, [ulHeight])

	useEffect(() => {
		window.addEventListener("resize", getUlResize);
	}, []);

	return (
		<div className={cn('card', {
			card_active: isMore === false
		})}>
			<div className="card__wrap">
				<div className="card__wrap-left">
					<div className="card__img">
						<img src={!companyImg ? noImage : companyImg} alt="img logo"/>
					</div>
					<div className="card__info">
						<ul className='card__list'>
							<li className='card__list-item'><span>Form: </span>{form}</li>
							<li className='card__list-item'><span>Company: </span>{company}</li>
							<li className='card__list-item'><span>Web: </span>{web}</li>
							<li className='card__list-item'><span>Address: </span>{address}</li>
						</ul>
					</div>
				</div>

				<div className="card__wrap-right">
						<h2 className='card__title'>{title}</h2>
						<p className='card__salary'>{salaryStart ? `Зарплата: от ${salaryStart} рублей` : 'Зарплата не указана'}</p>
						<h3 className='card__snapshot-title'>Success Snapshot:</h3>
						<div className={cn ('card__snapshots', {
							card__snapshots_active: isMore === false
						})}>
							<ul ref={height} className="card__snapshots-list" >
								<li className="card__snapshots-list-item">{responsibility}</li>
								{!requirement ? null :
									<li className="card__snapshots-list-item">{requirement}</li>
								}
								<li className="card__snapshots-list-item">{responsibility}</li>
								{!requirement ? null :
									<li className="card__snapshots-list-item">{requirement}</li>
								}
							</ul>
						</div>
						{ulHeight <= 120 ? null :
							<button onClick={showMore} className='card__more'>{isMore ? 'more details' : 'close'}</button>
						}
				</div>
			</div>
		</div>
	);
};

export default Card;
