;
$(document).ready(function() {
	googleAnalytics();

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

	$('#aCV').click(function(e) {

		e.preventDefault();

		$('#aApps').removeClass('selected');
		$('#aVideogames').removeClass('selected');
		$('#aCV').removeClass('selected');

		$('#sectionApps').hide(0);
		$('#sectionVideogames').hide(0, function() {

			$('#sectionCV').show(0);
			$('#aCV').addClass('selected');

		});

	});

	$('#aVideogames').click();
});

function googleAnalytics() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-45433616-1', 'binary-sequence.github.io');
  ga('send', 'pageview');
}
