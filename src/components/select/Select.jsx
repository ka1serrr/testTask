import cn from "classnames";
import React from "react";
import './select.scss'
const Select = ({isActive, handleClickOnSelect, selectsContentSubtitle, setIsActive, setSelectsContentSubtitle }) => {


	const changeContentSubtitle = (e) => {
		setSelectsContentSubtitle(e.target.value)
		setIsActive(false)
	}
	return (
		<div className="select">
			<h3 className="select__title">Form</h3>
			<div onClick={handleClickOnSelect}
				 className={cn('select__subtitle',{
				 select__subtitle_active: isActive,
				 select__subtitle_selected: selectsContentSubtitle !== 'Not selected'

			})}>{selectsContentSubtitle}</div>
			<div className={cn("select__content", {
				select__content_active: isActive,
			})}>
				<form>
					<input onClick={changeContentSubtitle} className='select__input' value='Full time' name='form' id='fullTime' type="radio"  />
					<label className='select__label' htmlFor="fullTime">Full time</label>

					<input onClick={changeContentSubtitle} className='select__input' value='Half time' name='form' id='halfTime' type="radio"  />
					<label className='select__label' htmlFor="halfTime">Half time</label>

					<input onClick={changeContentSubtitle} className='select__input' value='Part time' name='form' id='partTime' type="radio" />
					<label className='select__label' htmlFor="partTime">Part time</label>
				</form>
			</div>
		</div>
	)
}
export default Select;