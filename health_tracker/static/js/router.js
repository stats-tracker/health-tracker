// Create a new instance of the backbone router object
var router = new Backbone.Router();

// the default route, which runs when the url is blank


// login screen




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




//  ########## DETAILS ROUTE ##########

router.route('api/activities/:id', function (id) {

$('header').html('hey');


//DISPLAYING EXISTING CONTENT
$.ajax({
	url: 'api/activities/'+id+'/stats/',
	method: 'GET'
})
.done(testFunction)
.fail(arguments);

function testFunction (data){
	console.log("DEETS data: " + data[0].id);
	for (var x = 0; x < data.length; x++) {
				$('.activity-container').append('<div class="activity-tab">'+data[x].number+'</div>');
			}
}


//ADDING STUFF
//input form
var addActivityDetailForm = '<form action="." method="post"><input type="text" placeholder="Add Deets"   class="add-activity-text"><div class="add-activity-button">+ add</div></form>';
//add form to page
$('.add-activity-container').append(addActivityDetailForm);

// get value from user input, pass to updateActivityDetails function
$('.add-activity-button').click(function(e) {
	var inputActivityName = $('.add-activity-text').val();
	$('.add-activity-text').val('');
	updateActivityDetails(inputActivityName);
});

$('form').submit(function(e){ e.stopPropagation(); e.preventDefault();});

// add an activity DETAIL to the database
function updateActivityDetails(deets){
	console.log(deets);

	$.ajax({
			url: 'api/activities/'+id+'/stats/',
			method: 'POST',
			data: ({number: deets})
	})
		.then(renderDeets);

		function renderDeets(deets) {
			console.log(deets);
	//		console.log("deets: " + deets);
	//		console.log("deets.title: " + deets.title);
			//var pageTitle = record.title;
		//	$('.main-content').html(deets.number);
		}
   }




	// spit that TITLE value out on the page
/*	$.ajax({
	    url: 'api/activities/'+id,
	    method: 'GET'
	  })
	  .then(renderData);

	  function renderData(record) {
			console.log("hey! " + record.title);
			var pageTitle = record.title;
			$('.main-content').html(pageTitle);

	  } */


});












// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();
