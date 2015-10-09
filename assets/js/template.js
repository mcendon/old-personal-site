setInterval(function () {
	var pos = $("#head").css("backgroundPosition").split(" ");
	var posX = parseFloat(pos[0]);
	if (Math.abs(posX) == $("#head").width())
		posX = 0;

	$("#head").css("backgroundPosition", (posX - 1) + "px " + pos[1]);
}, 50);
