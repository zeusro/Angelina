$(function () {

	var note = $('#note'),
		newYear = true,
		now = new Date();
	var ts = new Date(now.getFullYear(), 8, 30);
	if (now>ts) {
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		// ts = (new Date()).getTime() + 10*24*60*60*1000;
		ts = new Date(ts.getFullYear() + 1, ts.getMonth(), ts.getDay());		
	}
	console.log(ts);

	$('#countdown').countdown({
		timestamp: ts,
		callback: function (days, hours, minutes, seconds) {

			var message = "距离Angelina生日还有 ";

			message += days + " 天 , ";
			message += hours + " 小时, ";
			message += minutes + " 分钟, ";
			message += seconds + " 秒  <br />";
			note.html(message);
		}
	});

});