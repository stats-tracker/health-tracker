// Create a new instance of the backbone router object
var router = new Backbone.Router();

//  ########## DETAILS ROUTE ##########
router.route('api/activities/:id', function (id) {

// clear existing content
$('.main-content').html('');

//DISPLAYING EXISTING CONTENT
$.ajax({
	url: 'api/activities/'+id+'/stats/',
	method: 'GET'
})
.done(testFunction)
.fail(arguments);

function testFunction (data){

	console.log("DEETS data: " + data[0].number);

	for (var x = 0; x < data.length; x++) {
				$('.main-content').append('<div class="activity-tab">'+data[x].number+'</div>');
			}
}





//ADDING STUFF  ###### WORK IN PROGRESS! ######
//input form
var addActivityDetailForm = '<form action="." method="post"><input type="text" placeholder="Add Deets"   class="add-activity-text"><div class="add-activity-button">+ add</div></form>';
//add form to page
$('.main-content').append(addActivityDetailForm);

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




	//spit that TITLE value out on the page
	$.ajax({
	    url: 'api/activities/'+id,
	    method: 'GET'
	  })
	  .then(renderData);

	  function renderData(record) {
			console.log("hey! " + record.title);
			var pageTitle = '<div class="detail-title">'+record.title+'<span>Track Your Activities</span></div>';
			$('.main-content').prepend(pageTitle);

	  }


});
