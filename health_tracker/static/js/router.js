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


/*
    $.ajax({
      url: 'activities/',
      method: 'GET'
      // title
    })
    .then(getData)
    .then(renderData);
*/


});



/*// all other routes
router.route( '', 'activities', function () {
  show(homeContent); // pass content to show function
});

router.route('activites/id', function () {
  show(pageOneContent); // pass content to show function
});

router.route('activities/id/edit', function () {
  show(pageTwoContent); // pass content to show function
});

router.route('page3', function () {
  show(pageThreeContent); // pass content to show function
});*/

// Kick off our initial route
Backbone.history.loadUrl();
