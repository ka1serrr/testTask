import React, {useState} from 'react';
import './selects.scss'
import Select from "../select/Select";
import Input from "../UI/input/Input";

const Selects = () => {
	const [selectsContentSubtitle, setSelectsContentSubtitle] = useState('Not selected')
	const [isActive, setIsActive] = useState(false)

	const handleClickOnSelect = () => {
		setIsActive(!isActive)
	}
	const clearSubtitle = () => {
		setSelectsContentSubtitle('Not selected')
	}

	return (
			<div className='selects'>
				<div className="container">
					<div className="selects__wrap">
						<div className="selects__wrap-left">
							<Select
								handleClickOnSelect={handleClickOnSelect}
								isActive={isActive}
								setIsActive={setIsActive}
								selectsContentSubtitle={selectsContentSubtitle}
								setSelectsContentSubtitle={setSelectsContentSubtitle}
							/>
							<Input
								id={'position'}
								label={'Position'}
								className={'input input_long'}
								placeholder={'Unspecified'}
							/>
						</div>
						<div className="selects__wrap-right">
							<button onClick={clearSubtitle} className="selects__btn">
								Clear sorting
							</button>
						</div>
					</div>
				</div>
			</div>

	);
};


export default Selects;
