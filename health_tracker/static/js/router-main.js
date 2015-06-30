// Create a new instance of the backbone router object
var router = new Backbone.Router();



router.route('', function () {

	$.ajax({
		url: 'api/activities/',
		method: 'GET'
	})
	.done(testFunction)
	.fail(arguments);

	function testFunction (data){
	//	console.log("main route data: " + data);
    for (x = 0; x < data.length; x++)
					$('.activity-container').append('<a href="#api/activities/'+data[x].id+'" class="activity-tab">'+data[x].title+'</a>');
  }




	// add input form to main page
	var inputHTML = '<form action="." method="post"><input type="text" placeholder="New Activity" class="add-activity-text" id="inputID"><div class="add-activity-button">+ add</div></form>';


	//
	$('.add-activity-container').append(inputHTML);


	// get value from user input, pass to postInput function
	$('.add-activity-button').click(function(e) {
				var inputActivityName = $('.add-activity-text').val();
			  $('.add-activity-text').val('');
				postInput(inputActivityName);
			});


	$('form').submit(function(e){
		e.stopPropagation();
		e.preventDefault();
	});


}); // end get ajax call




// second ajax call, called from button click
function postInput(input){
			$.ajax({
			url: 'api/activities/',
			method: 'POST',
			data: ({title: input})
		})
		.done(testFunction12)
		.fail(arguments);
		function testFunction12(data){
       location.reload(true); // reload page so first ajax call kicks off and loads all activities
	}


}



// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();
