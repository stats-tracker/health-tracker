// Create a new instance of the backbone router object
var router = new Backbone.Router();

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

// the default route, which runs when the url is blank
router.route('', function () {

	$.ajax({
		url: '/activities/',
		method: 'GET'
		// title
	})
	.done(testFunction)
	.fail(arguments);

	function testFunction (data){
		console.log(data);
    for (x = 0; x < data.length; x++)
					$('.activity-container').append('<a href="activities/'+data[x].id+'" class="activity-tab">'+data[x].title+'</a>');
  }

}); // end get ajax call



		// add input form to main page
		var inputHTML = '<input type="text" placeholder="New Activity" class="add-activity-text" id="inputID"><div class="add-activity-button">+ add</div>';

		$('.add-activity-container').append(inputHTML);


// get value from user input, pass to postInput function
$('.add-activity-button').click(function(e) {
			var inputActivityName = $('.add-activity-text').val();
		  console.log(inputActivityName);
		  $('.add-activity-text').val('');
			postInput(inputActivityName);
		});





// second ajax call, called from button click
function postInput(input){
			$.ajax({
			url: '/activities/',
			method: 'POST',
			data: input
			// title
		})
		.done(testFunction)
		.fail(arguments);
		function testFunction(data){

			console.log("testfunction123: " + data);

			for (x = 0; x < data.length; x++)
			$('.activity-container')
			.append('<a href="activities/'+data[x].id+' class="activity-tab">'+data[x].title+'</a>');
		}

}






// backbbone stuff
Backbone.history.loadUrl();
