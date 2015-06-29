// Create a new instance of the backbone router object
var router = new Backbone.Router();

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();


// function that appends our html to the .content-container class
function show (content){
	$('.content-container').html(content);
}

// grab our content from the fake scripts and hold in variables
//var homeContent = $('#activities').html();
//var pageOneContent = $('#').html();
//var pageTwoContent = $('#pageTwo').html();
//var pageThreeContent = $('#pageThree').html();

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
    console.log(data.length);
		for (x = 0; x < data.length; x++)
	//   console.log("id: " + data[x].id),
	//   console.log("title: " + data[x].title);

		$('.main-content').append('<div class="activity-tab"><a href="activities/'+data[x].id+'">'+data[x].title+'</a></div>');
}

});

$('.add-activity-button').click(function(e) {
	var inputActivityName = $('.add-activity-text').val();
  console.log(inputActivityName);
  $('.add-activity-text').val('');
	postInput(inputActivityName);
});

function postInput(input){

	$.ajax({
	url: '/activities/',
	method: 'POST',
	data: input
	// title
})
.done(testFunction)
.fail(arguments);
function testFunction (data){
		console.log('hello');
	console.log(data);
	console.log(data.length);
	for (x = 0; x < data.length; x++)
	$('.main-content').append('<div class="activity-tab"><a href="activities/'+data[x].id+'">'+data[x].title+'</a></div>');
}

};




Backbone.history.loadUrl();
