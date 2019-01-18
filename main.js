let words = ["developer", "mom", "designer", "woman", "human", "lover", "dancer", "vegetarian", "artist"];
var loopItem = 0;

document.addEventListener('DOMContentLoaded', function () {
	myTimer()
	setInterval(function () { myTimer() }, 1000);

	function myTimer() {
		var d = new Date();

		var timeOptions = { hour: '2-digit', minute: '2-digit' };
		var dateOptions = { weekday: 'short', day: 'numeric', month: 'long' };

		var time = d.toLocaleTimeString([], timeOptions);
		var date = d.toLocaleDateString("en-GB", dateOptions).toLocaleLowerCase();

		time.length > 5 ? time = time.replace(/\ .*/, '') : '';
		document.getElementById("Time").innerHTML = time;
		document.getElementById("Date").innerHTML = date;
	}
})

