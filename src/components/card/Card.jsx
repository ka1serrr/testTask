import React, {useState} from 'react';
import './card.scss'
import company from './resources/company.png'
import cn from "classnames";

const Card = () => {

	const[isMore, setIsMore] = useState(true)

	const showMore = () => {
		setIsMore(!isMore)
	}

	return (
		<div className={cn('card', {
			card_active: isMore === false
		})}>
			<div className="card__wrap">
				<div className="card__wrap-left">
					<div className="card__img">
						<img  width={375} height={95} src={company} alt=""/>
					</div>
					<div className="card__info">
						<ul className='card__list'>
							<li className='card__list-item'><span>Form: </span>Full time</li>
							<li className='card__list-item'><span>Company: </span>SoloProtect</li>
							<li className='card__list-item'><span>Web: </span>https://www.soloprotect.com/uk/</li>
							<li className='card__list-item'><span>Address: </span>United Kingdom</li>
						</ul>
					</div>
				</div>

				<div className="card__wrap-right">
						<h2 className='card__title'>.Net Software Developer (GIS experience)</h2>
						<p className='card__descr'>We are looking for an experienced and talented Software Developer to develop, test, document, and implement solutions for SoloProtect clients and devices. The ideal candidate will be self-motivated, have experience working in agile teams, and excellent communication skills</p>
						<h3 className='card__snapshot-title'>Success Snapshot:</h3>
						<div className={cn ('card__snapshots', {
							card__snapshots_active: isMore === false
						})}>
							<ul className="card__snapshots-list">
								<li className="card__snapshots-list-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo, quam. Accusantium delectus dolorem harum, maxime quia ratione repellat voluptas. Commodi delectus dolorum eum incidunt laboriosam, quidem suscipit ullam unde?</li>
								<li className="card__snapshots-list-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo, quam. Accusantium delectus dolorem harum, maxime quia ratione repellat voluptas. Commodi delectus dolorum eum incidunt laboriosam, quidem suscipit ullam unde?</li>
								<li className="card__snapshots-list-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo, quam. Accusantium delectus dolorem harum, maxime quia ratione repellat voluptas. Commodi delectus dolorum eum incidunt laboriosam, quidem suscipit ullam unde?</li>
								<li className="card__snapshots-list-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo, quam. Accusantium delectus dolorem harum, maxime quia ratione repellat voluptas. Commodi delectus dolorum eum incidunt laboriosam, quidem suscipit ullam unde?</li>
							</ul>
						</div>
						<div className={cn ('card__gradient', {
							card__gradient_inactive: isMore === false
						})}>

						</div>
						<button onClick={showMore} className='card__more'>{isMore ? 'more details' : 'close'}</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
