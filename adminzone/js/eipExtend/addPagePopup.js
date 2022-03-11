/**
 * Добавляет футер к окну добавления новой страницы для заказа услуги "Стилизация дизайна"
 */
function eipExtendAddPage() {
	uAdmin.eip.onAddButtonMouseupPopupOpened = addPageChecker(uAdmin.eip.onAddButtonMouseupPopupOpened);

	var orderPopupId = 'orderEditingPopup';
	var popup = document.createElement('form');
	popup.id = orderPopupId;
	popup.action = '//' + window.pageData.domain + '/adminzone/money/buy';
	popup.method = 'post';
	popup.classList.add('closed');
	document.body.appendChild(popup);

	var popupFooter = document.createElement('div');
	popupFooter.classList.add('eip_win_body');
	popupFooter.classList.add('popupFooter');
	popupFooter.innerHTML = '<div class="bottom_block">' +
		'    <div class="bottom_block-text">Хотите уникальный дизайн?</div>' +
		'    <button class="bottom_block-btn">ЗАКАЗАТЬ ИЗМЕНЕНИЕ ШАБЛОНА</a>' +
		'  </div>';

	var orderButton = popupFooter.querySelector('.bottom_block-btn');
	orderButton.addEventListener('click', getTemplate);
	orderButton.addEventListener('click', toggleState);

	/**
	 * Однократно возвращает шаблон всплывающего окна заказа услуги
	 */
	function getTemplate() {
		fetch('/udata/webforms/getDesignEditOrderTemplate/')
			.then(handleResponse)
			.then(function(result) {
				orderButton.removeEventListener('click', getTemplate);
				popup.innerHTML = result;
				addEvents();
			})
			.catch(handleError)
	}

	/**
	 * Переключает видимость всплывающих окон
	 */
	function toggleState() {
		popup.classList.toggle('closed');

		var closeAddPagePopup = document.querySelector('.eip_win .eip_win_close.popupClose');
		if (closeAddPagePopup) {
			closeAddPagePopup.dispatchEvent(new Event('click'));
		}
	}

	/**
	 * Декоратор события eip при открытии окна для добавления новой страницы
	 * @param f
	 * @returns {function(): *}
	 */
	function addPageChecker(f) {
		return function() {
			var result = f.apply(this, arguments);
			var addPagePopup = document.querySelector('.eip_win');
			addPagePopup.appendChild(popupFooter);
			return result;
		}
	}

	/**
	 * Добавляет события всплывающего окна заказа услуги
	 */
	function addEvents() {
		var popupClose = popup.querySelector('.popup_close');
		popupClose.addEventListener('click', toggleState);
		var innerPopup = popup.querySelector('.custom_popup');

		document.addEventListener('click', function(e) {
			if (innerPopup.clientHeight && e.target !== orderButton && !innerPopup.contains(e.target)) {
				toggleState();
			}
		});

		var requestInProgress = false;
		popup.onsubmit = function(e) {
			e.preventDefault();
			if (requestInProgress) {
				return;
			}
			requestInProgress = true;
			var formData = new FormData(popup);
			formData.append('order_source', window.location.href);
			fetch('/udata/webforms/sendDifmOrderRequest/', {
				method: 'post',
				body: formData
			})
				.then(handleResponse)
				.then(function() {
					popup.submit();
				})
				.catch(handleError);
		}
	}
}

try {
	uAdmin.eip.onAddButtonMouseupPopupOpened;
	eipExtendAddPage()
} catch (error) {
	document.addEventListener("DOMContentLoaded", eipExtendAddPage)
}
