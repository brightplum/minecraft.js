class MojangError extends Error {
	constructor(message) {
		super(message);
		this.name = "MojangError";
	}
}

class HypixelError extends Error {
	constructor(message) {
		super(message);
		this.name = "HypixelError";
	}
}

class MinehutError extends Error {
	constructor(message) {
		super(message);
		this.name = "MinehutError";
	}
}
module.exports = {
	MojangError, HypixelError, MinehutError
}