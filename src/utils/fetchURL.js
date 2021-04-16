const fetch = require('node-fetch');

err = new TypeError('"type" must be a valid string equal to \'json\' or \'text\'.');
async function makeRequest(url, type, method) {
	const response = await fetch(url, { method: method });

	if (type == 'json') return (await response.json())
	else return (await response.text());
}
async function renderRequest(url, type, method) {
	const data = await makeRequest(url, type, method);
	return data;
}
async function fetchURL(url, type, method) {
	if (!type || typeof type !== 'string' || (type !== 'text' && type !== 'json')) throw err;
	if (!method) method = 'GET';

	err = new TypeError('"url" must be a valid URL.');
	if (!url || typeof url !== 'string' || (!url.startsWith('https://') && !url.startsWith('http://'))) throw err;

	return (await renderRequest(url, type, method));
}

module.exports = {
	fetchURL
}