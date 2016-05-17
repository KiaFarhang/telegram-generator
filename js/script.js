function telegram () {
	var theForm = document.forms.theForm;
	var initialText = theForm.elements.initialtext.value;
	var stopText = initialText.replace(/\./g, " STOP ");
	var queryText = stopText.replace(/\?/g, " QUERY ");
	var commaText = queryText.replace(/\,/g, "");
	var exclaimText = commaText.replace(/\!/g, "");
	var returnText = exclaimText.replace(/\n/g, "<br>");
	var finalText = returnText.toUpperCase();

	if (initialText == null || initialText == "") {
		alert("Please enter some text.");
		return;
	}

	var results = document.getElementById("results");
	results.innerHTML = finalText;
	document.getElementById("results").scrollIntoView();
}

function reset() {
	document.getElementById("initialtext").value = "";
	document.getElementById("results").innerHTML = "";
}

function init () {
	var submitButton = document.getElementById("submitButton");
	submitButton.onclick = telegram;
	var resetButton = document.getElementById("resetButton");
	resetButton.onclick = reset;
}

window.onload = init;