// Create a new instance of the backbone router object
var router = new Backbone.Router();

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();


// function that appends our html to the .content-container class
function show (content){
	$('.content-container').html(content);
}

// grab our content from the fake scripts and hold in variables
var homeContent = $('#home').html();
var pageOneContent = $('#pageOne').html();
var pageTwoContent = $('#pageTwo').html();
var pageThreeContent = $('#pageThree').html();

// the default route, which runs when the url is blank
router.route('', function () {
  show(homeContent); // pass content to show function
});

// all other routes
router.route('home', function () {
  show(homeContent); // pass content to show function
});

router.route('page1', function () {
  show(pageOneContent); // pass content to show function
});

router.route('page2', function () {
  show(pageTwoContent); // pass content to show function
});

router.route('page3', function () {
  show(pageThreeContent); // pass content to show function
});

// Kick off our initial route
Backbone.history.loadUrl();
