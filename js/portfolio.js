;
$(document).ready(function() {

	$('#aApps').click(function(e) {

		e.preventDefault();

		$('#aApps').removeClass('selected');
		$('#aVideogames').removeClass('selected');

		$('#sectionVideogames').hide(0);

	});

	$('#aVideogames').click(function(e) {

		e.preventDefault();

		$('#aApps').removeClass('selected');
		$('#aVideogames').removeClass('selected');

		$('#sectionApps').hide(0);

	});

	$('#aVideogames').click();
});
