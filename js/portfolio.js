;
$(document).ready(function() {

	$('#aApps').click(function(e) {

		e.preventDefault();

		$('#aApps').removeClass('selected');
		$('#aVideogames').removeClass('selected');
		$('#aCV').removeClass('selected');

		$('#sectionVideogames').hide(0);
		$('#sectionCV').hide(0, function() {

			$('#sectionApps').show(0);
			$('#aApps').addClass('selected');

		});

	});

	$('#aVideogames').click(function(e) {

		e.preventDefault();

		$('#aApps').removeClass('selected');
		$('#aVideogames').removeClass('selected');
		$('#aCV').removeClass('selected');

		$('#sectionApps').hide(0);
		$('#sectionCV').hide(0, function() {

			$('#sectionVideogames').show(0);
			$('#aVideogames').addClass('selected');

		});

	});

	$('#aVideogames').click();
});
