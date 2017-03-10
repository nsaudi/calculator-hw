$(document).ready(function () {
	$("#button").on("click", function (e) {

		e.preventDefault();

		var x = parseFloat($("#x").val());
		var y = parseFloat($("#y").val());

		var add = sum(x, y);
		var sub = subtract(x, y);
		var mult = multiply(x, y);
		var div = divide(x, y);


		$("#zAdd").text(add);
		$("#zSub").text(sub);
		$("#zMult").text(mult);
		$("#zDiv").text(div);
		$(".x").text(x);
		$(".y").text(y);

		$('#results').addClass("show");

	});

});

function sum(a, b) {
	return a + b;
}

function subtract(a, b) {
	return b - a;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}
