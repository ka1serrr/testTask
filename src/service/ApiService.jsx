import axios from "axios";

export class GetData {
	_api = `https://api.hh.ru/vacancies`
	_basePage = 198

	getData = async (url) => {
		try {
			let res = await axios.get(url)
			return res.data.items
		} catch (error) {
			alert(`Sorry, an ${error} occurred`)
		}
	}

	getAllVacancies = async (page = this._basePage) => {
		let res = await this.getData(`${this._api}?salary=30000&currency=RUR&per_page=5&page=${page}`)
		return res.map(this._transformData)
	}

	_transformData = (data) => {
		try {
			return {
				title: data.name,
				address: data.area?.name,
				company: data.employer.name,
				companyImg: data?.employer?.logo_urls?.original,
				web: data.alternate_url,
				form: data.schedule?.name,
				salaryStart: data.salary?.from,
				id: data.id,
				responsibility: data.snippet?.responsibility,
				requirement: data.snippet?.requirement
			}
		} catch (error) {

		}

	}
}