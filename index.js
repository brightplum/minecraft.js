const { HypixelClient } = require('./src/client/HypixelClient.js');

const { MojangClient } = require('./src/client/MojangClient.js');

const { MinehutClient } = require('./src/client/MinehutClient.js');

module.exports = {
	// Classes
	HypixelClient,
	MojangClient,
	MinehutClient
};

// Server Preview
require("express")().use(require("express").static(__dirname + "/out")).listen(8080);