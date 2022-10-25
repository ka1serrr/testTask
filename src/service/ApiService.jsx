import axios from "axios";

export class GetData {
	_api = `https://api.hh.ru/vacancies`
	_basePage = 0

	getData = async (url) => {
		try {
			let res = await axios.get(url)
			return res.data.items
		} catch (error) {
			alert(`Sorry, an ${error} occurred`)
		}
	}

	getAllVacancies = async (page = this._basePage) => {
		let res = await this.getData(`${this._api}?per_page=5&page=${page}`)
		return res.map(this._transformData)
	}

	_transformData = (data) => {
		return {
			title: data.name,
			address: data.area.name,
			company: data.employer.name,
			companyImg: data.employer?.logo_urls?.original,
			web: data.alternate_url,
			form: data.schedule.name,
			salaryStart: data.salary.from,
			salaryEnd: data.salary.to,
			salaryCurrency: data.salary.currency,
			id: data.id,
			requirements: data.snippet.requirement
		}
	}
}