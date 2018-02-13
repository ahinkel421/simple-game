let player = {
	name: '',
	strength: 0,
	speed: 0,
	intelligence: 0
} 

function getPlayerName() {
	event.preventDefault();
	if ($('.player-name').val() === "") {
		alert('Please enter your name');
	}
	else {
		player.name = $('.player-name').val();
	}
}

$(document).ready(function() {

	$('.start-button').on('click', event => {
		$('.start-button').addClass('hidden');
		$('.name-form, .first-greeting').removeClass('hidden');
	});

	$('.name-form').submit(event => {
		getPlayerName();
	});

});