/**
 * Обработывает неперехваченные ошибки
 * @param message сообщение
 * @param url имя скрипта с ошибкой
 * @param line номер линии на которой произошла ошибка
 * @param column номер колонки на которой произошла ошибка
 * @returns {boolean}
 */
window.onerror = function (message, url, line, column) {
	reportError(message + ":" + url + ":" + line + ":" + column);
	return false;
};

/**
 * Отправляет отчет об ошибке
 * @param message сообщение ошибки
 * @param apiName имя апи в котором произошла ошибка, необязательный
 */
function reportError(message, apiName) {
	var settings = window.cloudController.errorReporting;
	if (!settings.enabled) {
		return;
	}
	var options = {
		imageTimeout: 0,
		logging: false,
		y: window.pageYOffset,
		height: document.documentElement.clientHeight
	};

	if (document.readyState !== "complete") {
		window.addEventListener("load", sendReport);
		return;
	}
	sendReport();

	function sendReport() {
		var dataURL;
		if (!settings.withScreen) {
			send();
			return;
		}

		html2canvas(document.body, options)
			.then(function (canvas) {
				dataURL = canvas.toDataURL('image/jpeg', 0.5);
			})
			.catch()
			.finally(send);

		function send() {
			var formData = new FormData();
			formData.append('dataUrl', dataURL);
			formData.append('hostName', window.pageData.domain);
			formData.append('message', message);
			if (apiName) {
				formData.append('apiName', apiName);
			}

			fetch('/udata/custom/errorReport/', {
				method: 'post',
				body: formData
			})
				.then(handleTextResponse)
				.catch();
		}
	}
}