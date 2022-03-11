/**
 * Скрипт сбора статистики производительности страницы
 * документация по api https://www.html5rocks.com/en/tutorials/webperformance/basics/
 * Конфиг nginx для сохранения в лог
 * log_format perfomance_stat '$time_local $host $http_referer $perfomance_data';

   location /p_monitor/{
	    set $perfomance_data "$arg_redirect $arg_dns $arg_connection $arg_request $arg_response $arg_domLoad $arg_domInteractive $arg_totalRequestTime";
	    access_log /var/log/perfomance_stat.log perfomance_stat;
	    return 200;
   }
 */

(function (jQuery) {
	var $ = jQuery,
		start = 0,
		timing = {},
		data = {
			redirect:0,
			fetchStart:0,
			dns:0,
			connection:0,
			request:0,
			response:0,
			domLoad:0,
			domInteractive:0,
			totalRequestTime:0
		};

	if (performance !== undefined) {
		window.onload = function () {
			timing = performance.timing;
			start = timing.navigationStart;
			data.redirect = timing.redirectEnd - timing.redirectStart;
			data.fetchStart = timing.fetchStart - start;
			data.dns = timing.domainLookupEnd - timing.domainLookupStart;
			data.connection = timing.domainLookupStart - timing.connectStart;
			data.request = timing.responseStart - timing.requestStart;
			data.response = timing.responseEnd - timing.responseStart;
			data.domLoad = timing.domComplete - timing.domLoading;
			data.domInteractive = timing.domInteractive - start;
			data.totalRequestTime = timing.domComplete-start;

			$.get(
				'/p_monitor/',
				data,
				'json'
			);
		}
	}

})(jQuery);
