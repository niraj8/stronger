var emojis = ["💪", "🥊", "👊"]

function shuffleEmoji() {
	var pos = Math.floor(Math.random() * emojis.length);
	$("#nav-emoji").text(emojis[pos]);
}


$(document).ready(function() {
	shuffleEmoji()
	twemoji.parse(document.body);

	$("#generate").on('click', function() {
		var passwords = [];

		passwords.push(genElectrum(10));
		passwords.push(randomGibberish(10));
		passwords.push(genDiceware(7));
		passwords.push(genElectrum(12));
		passwords.push(randomGibberish(14));

		var pH = "";


		for (var i = 0; i < passwords.length; i++) {
			pH += "<div class='card center'></span>" +passwords[i]+" <span class='glyphicon copy pull-right' data-clipboard-text='"+passwords[i]+"'' </span></div>";
		}

		pH += "";
		$("#passwords").html(pH);
		clippy = new Clipboard('.copy');
	});
	// $("#generate").click();
});

