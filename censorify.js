var censoredWords = ["sad", "bad", "dad"];
var customeCensoredWords = [];

function censor(inStr) {
	for(idx in censoredWords) {
		inStr = censoredWords.replace(censoredWords[idx], "****");
	}
	for(idx in customeCensoredWords) {
		inStr = customeCensoredWords.replace(customeCensoredWords[idx], "****");
	}
	return inStr;
}

function addCensorWord(word) {
	customeCensoredWords.push(word);
}

function getCensorWords() {
	return censoredWords.concat(customeCensoredWords);
}

exports.censor = censor;
exports.addCensorWord = addCensorWord;
exports.getCensorWords = getCensorWords;