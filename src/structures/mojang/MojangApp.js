class MojangApp {
	constructor(data) {
		this.status = data.Status;

		this.runtime = data['Runtime-Mode'];

		this.version = {
			implementation: data['Implementation-Version'],
			specification: data['Specification-Version']
		}

		this.app = {
			name: data['Application-Name'],
			owner: data['Application-Owner'],
			author: data['Application-Author'],
			description: data['Application-Description'],
		}
	}
}

module.exports = {
	MojangApp
}