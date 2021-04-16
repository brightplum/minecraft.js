class HypixelPlayerFriends {
	constructor(data) {
		this.playerUUID = data.uuid;

		let records = [];

		function formCorrectly(item, index) {
			records[index] = {
				id: item._id,
				receiverUUID: item.uuidReceiver,
				senderUUID: item.uuidSender,
				startedTimestamp: item.started
			};
		}

		data.records.forEach(formCorrectly)

		this.friends = records;
	}
}

module.exports = {
	HypixelPlayerFriends
}