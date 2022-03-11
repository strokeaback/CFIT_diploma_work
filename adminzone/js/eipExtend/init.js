/**
 * Обрабатывает ответ fetch запроса
 * @param {Response} response
 * @returns {*}
 */
function handleResponse(response) {
	return response.json()
		.then(function(json) {
			if (response.ok) {
				return json;
			}

			return Promise.reject(json);
		})
}

/**
 * Обрабатывает ошибку fetch запроса
 * @param error
 */
function handleError(error) {
	uAdmin.eip.message(error.message);
}

/**
 * Обрабатывает xml ответ fetch запроса
 * @param {Response} response
 * @returns {*}
 */
function handleTextResponse(response) {
	return response.text()
		.then(function(text) {
			if (response.ok) {
				return text;
			}

			return Promise.reject(text);
		})
}