var sentenceToPassword = function bruce_schneier(sentence) {
	return "tobeimplemented";	
}

// Diceware passwords
var diceware_wordlist = null;

var genDiceware = function diceware(word_count=6) {
	if (!diceware_wordlist) {
		$.getJSON("files/diceware.wordlist.json", function(data){
			diceware_wordlist = data;
			console.log(diceware_wordlist);
		});
	}	

	var genKey = function() {
		var key = '';
		for (var i = 0; i < 5; i++) {
			key += (1 + Math.floor(Math.random() * 6)).toString();
		}

		return key;
	}

	var passphrase = [];
	while (passphrase.length != word_count) {
		var tmp_word = diceware_wordlist[genKey()];
		if (passphrase.indexOf(tmp_word) == -1)
			passphrase.push(tmp_word);
	}
	return passphrase.join(" ");
}

var electrum_wordlist = null;

var genElectrum = function electrum(word_count=10) {
	if (!electrum_wordlist) {
		$.get("files/electrum.english.wordlist", function(data){
			electrum_wordlist = data.split("\n");
			console.log(electrum_wordlist);
		});	
	}

	var passphrase = [];
	while(passphrase.length != word_count) {
		var tmp_word = electrum_wordlist[Math.floor(Math.random()*electrum_wordlist.length)];
		if (passphrase.indexOf(tmp_word) == -1) {
			passphrase.push(tmp_word);
		}
	}

	return passphrase.join(" ");
}

var randomGibberish = function(length = 10) {

	var len = length;
	var options = {
		special : true,
		downcase: true,
		uppercase: true,
		numbers: true
	};

	var charSet = [];
	
	var special = '!@#$%^&*_+=.';
	var downcase = 'abcdefghijklmnopqrstuvwxyz';
	var uppercase = downcase.toUpperCase();
	var numbers = '0123456789';



	if (options.special) 
		charSet += special;
	if (options.uppercase) 
		charSet += uppercase;
	if (options.downcase) 
		charSet += downcase;
	if (options.numbers) 
		charSet += numbers;


	// console.log(charSet)
	var password = '';
	for (var i = 0; i < len; i++) {
		var c = charSet[Math.floor(Math.random()*charSet.length)];
		password += c;
	}

	return password;
}

var entropy = function (charSet, length) {
	var symbolCount = charSet.length;
	var h = length*Math.log2(symbolCount);
	return h;
}

